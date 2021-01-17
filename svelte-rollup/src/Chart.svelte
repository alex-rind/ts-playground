<script lang="ts">
  import { onMount } from "svelte";
  import * as d3 from "d3";

  const width = 400;
  const height = 400;
  export let markCount = 16;

  // some fruits categories and a color scale
  const fruits = ["Apple", "Banana", "Cherry", "Orange"];
  const color = d3.scaleOrdinal(d3.schemeCategory10);
  // appendLegend(svg, fruits, color);

  // random generate fruit items
  let data: { type: string; count: number }[] = [];

  let leaves: d3.HierarchyCircularNode<{
    type: string;
    count: number;
  }>[] = [];

  onMount(async () => {
    // put data loading here (cp. https://svelte.dev/tutorial/onmount)
    const dataTemp: { type: string; count: number }[] = [];
    for (let i = 0; i < markCount; i++) {
      dataTemp.push({
        type: fruits[Math.floor(Math.random() * fruits.length)],
        count: Math.ceil(Math.random() * 10)
      });
    }
    data = dataTemp;

    // pack layout as in <https://observablehq.com/@d3/bubble-chart>
    const root = d3
      .pack()
      .size([width - 2, height - 2])
      .padding(3)(
      d3.hierarchy({ children: data }).sum((d: any) => d.count)
    ) as d3.HierarchyCircularNode<{
      type: string;
      count: number;
    }>;
    leaves = root.leaves();
  });
</script>

<svg {width} {height}>
  {#each leaves as bubble}
    <circle
      cx={bubble.x}
      cy={bubble.y}
      r={bubble.r}
      fill={color(bubble.data.type)}>
      <title>{bubble.data.type}</title>
    </circle>
  {:else}
    <!-- this block renders when data length === 0 -->
    <text>no fruits in here :-(</text>
  {/each}

  <g id="legend">
    {#each fruits as cat, i}
      <g transform="translate(15, {i * 16 + 15})">
        <text>{cat}</text>
        <rect x="-10" y="-7" width="7" height="7" fill={color(cat)} />
      </g>
    {/each}
  </g>
</svg>

<style>
  #legend text {
    font-size: 80%;
  }
</style>
