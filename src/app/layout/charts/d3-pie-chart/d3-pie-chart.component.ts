import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-d3-pie-chart',
  templateUrl: './d3-pie-chart.component.html',
  styleUrls: ['./d3-pie-chart.component.css']
})
export class D3PieChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var dataset = [10, 23, 45, 60];

    var width = 300,
      height = 300,
      margin = 60,
      radius = Math.min(width, height) / 2;

    var color = d3.scaleOrdinal()
      .range(["#FF6384", "#36A2EB", "#FFCE56", "blue"]);
    var pie = d3.pie();

    var arc = d3.arc()
      .innerRadius(0)
      .outerRadius(radius - 20);

    var labelArc = d3.arc()
      .outerRadius(radius - 50)
      .innerRadius(radius - 50);
    var svg = d3.select("#area")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var arcs = svg.selectAll("arc")
      .data(pie(dataset))
      .enter()
      .append("g")
      .attr("class", "arc");

    arcs.append("path")
      .attr('fill', function (d, i) { return color(i); })
      .attr("d", arc);
    arcs.append("text")
      .attr("transform", function (d) { return "translate(" + labelArc.centroid(d) + ")"; })
      .text(function (d) { return d.value; })
      .style("fill", "#fff");
  }
}

