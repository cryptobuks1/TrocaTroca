import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import {ChartHttpService} from "../../../services/http/chart-http.service";
import {ChartStatus, Status} from "../../../model";
import {HttpClient} from "@angular/common/http";
import {StatusHttpService} from "../../../services/http/status-http.service";

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  months = [];
  exchanges = [];
  status: Status[];
  chart = [];


  constructor(
      private chartHttp: ChartHttpService,
      private statusHttp: StatusHttpService,
      private http: HttpClient
  ) { }

  ngOnInit() {
      this.getChartStatus();
  }

  getChartStatus() {
      return this.http.get('http://localhost:8000/api/charts/status')
          .subscribe((res: ChartStatus[]) => {
              res.forEach(ChartStatus => {
                  this.months.push(ChartStatus.status_name);
                  this.exchanges.push(ChartStatus.exchanges_count);
              });
              // @ts-ignore
              this.chart = new Chart('canvas', {
                  type: 'bar',
                  data: {
                      labels: this.months,
                      datasets: [
                          {
                              data: this.exchanges,
                              borderColor: '#f00',
                              backgroundColor: '#008542',
                              fill: true
                          }
                      ]
                  },
                  options: {
                      legend: {
                          display: true,
                          labels: 'Trocas Por Situação'
                      },
                      scales: {
                          xAxes: [{ display: true }],
                          yAxes: [{ display: true }]

                      }
                  }
              });
      });

  }
}
