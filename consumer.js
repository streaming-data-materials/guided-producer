let margin = {
    top: 10,
    right: 30,
    bottom: 30,
    left: 60
  },
  width = 460 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom

// append the svg object to the body of the page
let svg = d3.select("#my_dataviz")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform",
    "translate(" + margin.left + "," + margin.top + ")")

let data = []

let xScale = d3.scaleLinear()
  .domain([0, 1])
  .range([0, width]);
let xAxis = d3.axisBottom(xScale)
svg.append("g")
  .attr("class", "xaxis")
  .attr("transform", "translate(0," + height + ")")
  .call(xAxis);
let yScale = d3.scaleLinear()
  .domain([0, .867])
  .range([height, 0]);
let yAxis = d3.axisLeft(yScale)
svg.append("g")
  .attr("class", "yaxis")
  .call(yAxis);

function add_data(x, y) {
  data.push({
    'step': data.length,
    'x': x,
    'y': y
  })
  svg.selectAll('.gasket').remove()
  svg.append("g")
  .attr('class', 'gasket')
  .selectAll('dot')
  .data(data)
  .enter()
  .append("circle")
    .attr("cx", function (d) { return xScale(d.x); } )
    .attr("cy", function (d) { return yScale(d.y); } )
    .attr("r", 1.5)
    .style("fill", "#69b3a2")

}
