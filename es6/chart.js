
const width = 400;
const height = 400;
const MARKS = 16;

export function renderChart(domId) {
    const svg = d3.select(domId)
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    // some fruits categories and a color scale
    const fruits = ['Apple', 'Banana', 'Cherry', 'Orange'];
    const color = d3.scaleOrdinal(d3.schemeCategory10);
    appendLegend(svg, fruits, color);

    // random generate fruit items
    const data = [];

    for (let i = 0; i < MARKS; i++) {
        data.push({type: fruits[Math.floor(Math.random()*fruits.length)], 
            count: Math.ceil(Math.random()*10)});
    }

    // pack layout as in <https://observablehq.com/@d3/bubble-chart>
    const root = d3.pack()
        .size([width - 2, height - 2])
        .padding(3)
        (d3.hierarchy({children: data}).sum(d => d.count));

    // simply draw circles
    var node = svg.selectAll("circle")
        .data(root.leaves())
        .join('circle')
            .attr("cx", d => d.x)
            .attr("cy", d => d.y)
            .attr("r", d => d.r)
            .attr("fill", d => color(d.data.type))
            .append("title")
                .text((d) => d.data.type);
}

function appendLegend(svg, allTypes, color) {
    const legendEntries = svg.append('g')
        .attr("id", "legend")
        .selectAll('g')
        .data(allTypes)
        .enter().append('g')
        .attr("transform", (d, i) => {return "translate(" + 15 + ", " + (i*16 + 15) + ")"});

    legendEntries.append('text')
        .text((d) => d);

    legendEntries.append('rect')
        .attr('x', '-10')
        .attr('y', '-7')
        .attr('width', '7')
        .attr('height', '7')
        .style('fill', (d) => color(d));
}
