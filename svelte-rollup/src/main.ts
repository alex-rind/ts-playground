import Chart from "./Chart.svelte";

const chart = new Chart({
  target: document.querySelector("#chart"),
  props: {
    markCount: "16"
  }
});

export default chart;
