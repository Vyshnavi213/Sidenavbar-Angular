import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { D3BarChartComponent } from '../charts/d3-bar-chart/d3-bar-chart.component';
import { D3ChartComponent } from './d3-chart.component';
import { D3PieChartComponent } from '../charts/d3-pie-chart/d3-pie-chart.component';
import { D3CirclesComponent } from '../charts/d3-circles/d3-circles.component';
import { D3DoughnutChartComponent } from '../charts/d3-doughnut-chart/d3-doughnut-chart.component';

const routes: Routes = [
  {
    path:'',
    component:D3ChartComponent,
    children:[
      {
        path:'',
        redirectTo:'d3-bar-chart',
        pathMatch:'prefix'
      },
      {
        path: 'd3-bar-chart',
        component: D3BarChartComponent
      },
      {
        path: 'd3-pie-chart',
        component: D3PieChartComponent
      },
      {
        path: 'd3-circles',
        component: D3CirclesComponent
      },
      {
        path: 'd3-doughnut-chart',
        component: D3DoughnutChartComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class D3ChartRoutingModule { }
