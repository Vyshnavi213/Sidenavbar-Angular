import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-d3-circles',
  templateUrl: './d3-circles.component.html',
  styleUrls: ['./d3-circles.component.css']
})
export class D3CirclesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var margin = { top: 10, right: 40, bottom: 30, left: 30 },
      width = 450 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

    var svG = d3.select("#area")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

    var data = [{ x: 10, y: 20 }, { x: 40, y: 90 }, { x: 80, y: 50 }]

    var x = d3.scaleLinear()
      .domain([0, 100])
      .range([0, width]);
    svG
      .append('g')
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    var y = d3.scaleLinear()
      .domain([0, 100])
      .range([height, 0]);
    svG
      .append('g')
      .call(d3.axisLeft(y));

    svG
      .selectAll("#area")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", function (d) { return x(d.x) })
      .attr("cy", function (d) { return y(d.y) })
      .attr("r", 7);
    // .attr("ry", 10);
    // .append("rect")
    // .attr("x", 0)
    // .attr("y", 0)
    // .attr("width", function (d) { return x(d.x) })
    // .attr("height", function (d) { return y(d.y) });

  }
}
