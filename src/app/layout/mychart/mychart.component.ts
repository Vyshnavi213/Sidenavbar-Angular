import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import * as Chart from 'chart.js';


@Component({
  selector: 'app-mychart',
  templateUrl: './mychart.component.html',
  styleUrls: ['./mychart.component.css']
})
export class MychartComponent implements OnInit {

  // canvas: any;
  // ctx: any;
  constructor() { }
 ngOnInit() {
   
 }
}
  //ngAfterViewInit() {
  //   this.canvas = document.getElementById('myChart');
  //   this.ctx = this.canvas.getContext('2d');
  //   let myChart = new Chart(this.ctx, {
  //     type: 'pie',
  //     data: {
  //         labels: ["New", "In Progress", "On Hold"],
  //         datasets: [{
  //             label: '# of Votes',
  //             data: [4,6,9],
  //             backgroundColor: [
  //                 'rgba(255, 99, 132, 1)',
  //                 'rgba(54, 162, 235, 1)',
  //                 'rgba(255, 206, 86, 1)'
  //             ],
  //             borderWidth: 1
  //         }]
  //     },
  //     options: {}
  //   });
  // }
 
 
//}

