import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { ChartsModule } from 'ng2-charts';
import * as Chart from 'chart.js';
import 'chartjs-plugin-labels';

@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.css']
})
export class MyBarChartComponent implements OnInit {

  constructor() { }
  ngOnInit() {
    let ctx = <HTMLCanvasElement>document.getElementById('charts');
    let charts = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: ["2015-01", "2015-02", "2015-03", "2015-04", "2015-05", "2015-06", "2015-07", "2015-08", "2015-09", "2015-10", "2015-11", "2015-12"],

        datasets: [{
          data: [12, 19, 3, 5, 2, 3, 20, 3, 5, 6, 2, 1],
          label: 'Series A',
          backgroundColor: "#FF6384",
          borderColor: "blue",
          borderWidth: 1,
          hoverBackgroundColor: "red"
        },
        {
          data: [13, 5, 7, 8, 2, 19, 3, 5, 2, 3, 20, 3],
          label: 'Series B',
          backgroundColor: "#36A2EB",
          borderColor: "blue",
          borderWidth: 1,
          hoverBackgroundColor: "orange"
        }]
      },
      options: {
        plugins: {
          labels: {
            render: 'value'
          }
        },
        legend: {
          "display": false
        },

        title: {
          display: true,
          text: 'Chart.js Bar Chart'
        },
        tooltips: {
          enabled: true,
          mode: 'index',
          intersect: false
        },
        responsive: true,
        scales: {
          xAxes: [{
            barPercentage: 0.5,
            // barThickness: 60,
            maxBarThickness: 80,
            // minBarLength: 2,
            stacked: false
          }],
          yAxes: [{
            ticks: {
              beginAtZero: false,

            }
          }]
        },
      }
    });
  }
}
