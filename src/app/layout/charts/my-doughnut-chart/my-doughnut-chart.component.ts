import { Component, OnInit } from '@angular/core';
import { ChartType, ChartDataSets } from 'chart.js';
import { ChartsModule } from 'ng2-charts';
import * as Chart from 'chart.js';
import 'chartjs-plugin-labels';

// import { PluginServiceGlobalRegistrationAndOptions } from 'ng2-charts';

@Component({
  selector: 'app-my-doughnut-chart',
  templateUrl: './my-doughnut-chart.component.html',
  styleUrls: ['./my-doughnut-chart.component.css']
})
export class MyDoughnutChartComponent implements OnInit {
  //   public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  //   public doughnutChartData = [120, 150, 180, 90];
  //   public doughnutChartType = 'doughnut';
  //   public doughnutChartLegend = "true";
  //   public doughnutChartOptions : {
  //     responsive: true,
  //     hoverBackgroundColor: "red"
  //   }

  //   constructor() { }

  //   ngOnInit() {
  //   }
  // }



  constructor() { }
  ngOnInit() {
    let ctx = <HTMLCanvasElement>document.getElementById('dnut');
    let myChart = new Chart(ctx, {
      type: 'doughnut',
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
            ],
            hoverBackgroundColor: [
              "#FFCE56",
              "blue",
              "#FF6384",
              "#36A2EB"
            ],
            borderWidth: 2,
          }]
      },
      options: {
        plugins: {
          labels: {
            render: 'value',
            // precision: 2,
            // arc: true,
          }
        },
        cutoutPercentage: 60,
        title: {
          display: true,
          text: 'Chart.js Doughnut Chart'
        }
      }

    });

  }

}

