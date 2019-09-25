import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MychartRoutingModule } from './mychart-routing.module';
import { MyBarChartComponent } from '../charts/my-bar-chart/my-bar-chart.component';
import { MyDoughnutChartComponent } from '../charts/my-doughnut-chart/my-doughnut-chart.component';
import { MychartComponent } from './mychart.component';
import { MyPieChartComponent } from '../charts/my-pie-chart/my-pie-chart.component';
import { MyBubbleChartComponent } from '../charts/my-bubble-chart/my-bubble-chart.component';
import { ChartsModule } from 'ng2-charts';
import { MyLineChartComponent } from '../charts/my-line-chart/my-line-chart.component';
import { DoughnutChartComponent } from '../charts/doughnut-chart/doughnut-chart.component';

@NgModule({
  declarations: [
    MyBarChartComponent,
    MyDoughnutChartComponent,
    MychartComponent,
    MyPieChartComponent,
    MyBubbleChartComponent,
    MyLineChartComponent,
    DoughnutChartComponent
  ],
  imports: [
    CommonModule,
    MychartRoutingModule,
    ChartsModule
  ]
})
export class MychartModule { }
