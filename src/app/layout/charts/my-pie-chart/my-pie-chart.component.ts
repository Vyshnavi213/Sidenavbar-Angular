import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import 'chartjs-plugin-labels';

@Component({
  selector: 'app-my-pie-chart',
  templateUrl: './my-pie-chart.component.html',
  styleUrls: ['./my-pie-chart.component.css']
})
export class MyPieChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let ctx = <HTMLCanvasElement>document.getElementById('piec');
    let myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'],
        datasets: [
          {
            data: [120, 150, 180, 90],
            label: 'Series A',
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "blue"
            ]
          }],
      },
      options: {
          plugins:{
            // pieceLabel: {
            //   render: 'data'
            // },
            labels: {
            render: 'value',
            // precision: 2,
            // arc: true,
            }
        },
        responsive: true,
        legend: {
          display: true,
        },
        tooltips: {
          enabled: true,
          mode: 'index',
          intersect: false
        },
        title: {
          display: true,
          text: 'Chart.js Pie Chart'
        }
      }
    });
  }

}
