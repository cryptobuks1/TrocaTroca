import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  chart = [];

  constructor() { }

  ngOnInit() {
      this.chart = new Chart('canvas', {
          type: 'bar',
          data: {
              labels: ["Jan 30, 2017, 12:43:36 AM", "Jan 30, 2017, 8:27:41 AM", "Jan 30, 2017, 2:59:12 PM"],
              datasets: [
                  {
                      data: [279.946, 282.597, 280.15],
                      borderColor: '#f00',
                      fill: false
                  },
                  {
                      data: [279.946, 282.597, 278.15],
                      borderColor: '#f00',
                      fill: false
                  }
              ]
          },
          options: {
              legend: {
                  display: true
              },
              scales: {
                  xAxes: [{ display: true }],
                  yAxes: [{ display: true }]

              }
          }
      });
  }

}
