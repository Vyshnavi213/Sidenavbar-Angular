import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-d3-bar-chart',
  templateUrl: './d3-bar-chart.component.html',
  styleUrls: ['./d3-bar-chart.component.css']
})
export class D3BarChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var margin = { top: 10, right: 45, bottom: 20, left: 30 },
      width = 450 - margin.left - margin.right,
      height = 300 - margin.top - margin.bottom;

    var svG = d3.select("#area")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

    var data = [{ a: 10, b: 80 }, { a: 30, b: 90 }, { a: 70, b: 70 }, { a: 50, b: 47 }]

    var xScale = d3.scaleLinear()
      .domain([0, 100])
      .range([0, width]);
    svG
      .append('g')
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(xScale));

    var yScale = d3.scaleLinear()
      .domain([0, 100])
      .range([height, 0]);
    svG
      .append('g')
      .call(d3.axisLeft(yScale));

    svG
      .selectAll("#area")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", function (d) { return xScale(d.a) })
      .attr("y", function (d) { return yScale(d.b) })
      .attr("width", 40)
      .attr("height", function (d) { return height - yScale(d.b); })
      .style('fill', 'lightblue');

    // svG
    //   .append("text")
    //   .attr("x", function (d) { return xScale(d); })
    //   .attr("y", function (d) { return yScale(d); })
    //   .attr("dy", ".35em")
    //   .text(function (d, i) { return d[i]; });
  }
}
