import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyBarChartComponent } from '../charts/my-bar-chart/my-bar-chart.component';
import { MyDoughnutChartComponent } from '../charts/my-doughnut-chart/my-doughnut-chart.component';
import { MychartComponent } from './mychart.component';
import { MyPieChartComponent } from '../charts/my-pie-chart/my-pie-chart.component';
import { MyBubbleChartComponent } from '../charts/my-bubble-chart/my-bubble-chart.component';
import { MyLineChartComponent } from '../charts/my-line-chart/my-line-chart.component';
import { DoughnutChartComponent } from '../charts/doughnut-chart/doughnut-chart.component';

const routes: Routes = [
  {
    path:'',
    component:MychartComponent,
    children:[
      {
        path:'',
        redirectTo:'my-bar-chart',
        pathMatch:'prefix'
      },
      {
        path: 'my-bar-chart',
        component: MyBarChartComponent
      },
      {
        path: 'my-pie-chart',
        component: MyPieChartComponent
      },
      {
        path: 'my-bubble-chart',
        component: MyBubbleChartComponent
      },
      {
        path: 'my-line-chart',
        component: MyLineChartComponent
      },
      {
        path: 'doughnut-chart',
        component: DoughnutChartComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MychartRoutingModule { }
