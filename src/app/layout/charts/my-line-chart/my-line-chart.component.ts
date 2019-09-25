import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-my-line-chart',
  templateUrl: './my-line-chart.component.html',
  styleUrls: ['./my-line-chart.component.css']
})
export class MyLineChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let ctx = <HTMLCanvasElement>document.getElementById('main');
    let charts = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          data: [65, 59, 80, 81, 56, 55, 40],
          label: 'Series A',
          borderColor: 'black',
          borderWidth: 2,
          backgroundColor: 'rgba(255,0,0,0.3)'
        }]
      },
      options: {
        "hover": {
          "animationDuration": 0
        },
        "animation": {
          "duration": 1,
          "onComplete": function () {
            var chartInstance = this.chart,
              ctx = chartInstance.ctx;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'top';
            this.data.datasets.forEach(function (dataset, i) {
              var meta = chartInstance.controller.getDatasetMeta(i);
              meta.data.forEach(function (line, index) {
                var data = dataset.data[index];
                ctx.fillText(data, line._model.x, line._model.y - 25);
              });
            });
          }
        },
        legend: {
          display: false
        },

        title: {
          display: true,
          text: 'Chart.js Line Chart'
        },
        tooltips: {
          enabled: true,
          mode: 'index',
          intersect: false
        },
        responsive: true,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

}
