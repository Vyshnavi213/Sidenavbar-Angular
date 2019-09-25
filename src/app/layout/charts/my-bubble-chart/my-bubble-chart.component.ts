import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color } from 'ng2-charts';
import * as Chart from 'chart.js';
@Component({
  selector: 'app-my-bubble-chart',
  templateUrl: './my-bubble-chart.component.html',
  styleUrls: ['./my-bubble-chart.component.css']
})
export class MyBubbleChartComponent implements OnInit {

  public bubbleChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        ticks: {
          min: 0,
          max: 30,
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 30,
        }
      }]
    }
  };
  public bubbleChartType: ChartType = 'bubble';
  public bubbleChartLegend = true;

  public bubbleChartData: ChartDataSets[] = [
    {
      data: [
        { x: 10, y: 10, r: 20 },
        { x: 15, y: 5, r: 15 },
        { x: 26, y: 12, r: 23 },
        { x: 7, y: 8, r: 8 },
      ],
      label: 'Series A',
    },
  ];

  constructor() { }
  ngOnInit(){
    
  }

  // ngOnInit() {
  //   let ctx = <HTMLCanvasElement>document.getElementById('charts');
  //   let charts = new Chart(ctx, {
  //     type: 'bar',
  //     data: {
  //       labels: ["2015-01", "2015-02", "2015-03", "2015-04", "2015-05", "2015-06", "2015-07", "2015-08", "2015-09", "2015-10", "2015-11", "2015-12"],
  //       datasets: [{
  //         data: [12, 19, 3, 5, 2, 3, 20, 3, 5, 6, 2, 1],
  //         label: 'Series A',
  //         backgroundColor: "lightblue",
  //         borderColor: "blue",
  //         borderWidth: 2,
  //         hoverBackgroundColor: "red"
  //       }]
  //     },
  //     options: {

  //       "hover": {
  //         "animationDuration": 0
  //       },
  //       "animation": {
  //         "duration": 1,
  //         "onComplete": function () {
  //           var chartInstance = this.chart,
  //             ctx = chartInstance.ctx;
  //           ctx.textAlign = 'center';
  //           ctx.textBaseline = 'top';

  //           this.data.datasets.forEach(function (dataset, i) {
  //             var meta = chartInstance.controller.getDatasetMeta(i);
  //             meta.data.forEach(function (bar, index) {
  //               var data = dataset.data[index];
  //               ctx.fillText(data, bar._model.x, bar._model.y + 5);
  //             });
  //           });
  //         }
  //       },
  //       legend: {
  //         "display": false
  //       },

  //       title: {
  //         display: true,
  //         text: 'Chart.js Bar Chart'
  //       },
  //       tooltips: {
  //         enabled: true,
  //         mode: 'index',
  //         intersect: false
  //       },
  //       responsive: true,
  //       scales: {
  //         xAxes: [{
  //           barPercentage: 0.5,
  //           // barThickness: 60,
  //           maxBarThickness: 80,
  //           // minBarLength: 2,
  //           stacked: false
  //         }],
  //         yAxes: [{
  //           ticks: {
  //             beginAtZero: false,
  //           }
  //         }]
  //       },
  //     }
  //   });
  // }

}
