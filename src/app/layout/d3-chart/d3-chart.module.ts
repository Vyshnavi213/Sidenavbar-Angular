import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { D3ChartRoutingModule } from './d3-chart-routing.module';
import { D3BarChartComponent } from '../charts/d3-bar-chart/d3-bar-chart.component';
import { D3ChartComponent } from './d3-chart.component';
import { D3PieChartComponent } from '../charts/d3-pie-chart/d3-pie-chart.component';
import { D3CirclesComponent } from '../charts/d3-circles/d3-circles.component';
import { D3DoughnutChartComponent } from '../charts/d3-doughnut-chart/d3-doughnut-chart.component';

 
@NgModule({
  declarations: [
    D3BarChartComponent,
    D3ChartComponent,
    D3PieChartComponent,
    D3CirclesComponent,
    D3DoughnutChartComponent
  ],
  imports: [
    CommonModule,
    D3ChartRoutingModule

  ]
})
export class D3ChartModule { }
