import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import {
    CardSector,
    CardUnit,
    CardUser,
    ChartGroupsCadastradas,
    ChartGroupsConfirmed,
    ChartStatus,
    Status
} from "../../../model";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    months = [];
    groupsCadastradas = [];
    groupsConfirmed = [];
    exchanges = [];
    exchangesGroupsCadastradas = [];
    exchangesGroupsConfirmed = [];
    status: Status[];
    chartStatus = [];
    chartGroupsCadastradas = [];
    chartGroupsConfirmed = [];
    users = [];
    users_count= [];
    units = [];
    units_count= [];
    sectors = [];
    sectors_count= [];


    constructor(
        private http: HttpClient
    ) {
    }

    ngOnInit() {
        this.getChartStatus();
        this.getChartGroupsCadastradas();
        this.getChartGroupsConfirmed();
        this.getUsersCount();
        this.getUnitsCount();
        this.getSectorsCount();
    }

    getChartStatus() {
        return this.http.get('http://localhost:8000/api/charts/status')
            .subscribe((res: ChartStatus[]) => {
                res.forEach(ChartStatus => {
                    this.months.push(ChartStatus.status_name);
                    this.exchanges.push(ChartStatus.exchanges_count);
                });
                // @ts-ignore
                this.chartStatus = new Chart('canvas1', {
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
                            xAxes: [{display: true}],
                            yAxes: [{display: true}]

                        }
                    }
                });
            });

    }

    getChartGroupsCadastradas() {
        return this.http.get('http://localhost:8000/api/charts/groups_cadastradas')
            .subscribe((res: ChartGroupsCadastradas[]) => {
                res.forEach(ChartGroupsCadastradas => {
                    this.groupsCadastradas.push(ChartGroupsCadastradas.group_name);
                    this.exchangesGroupsCadastradas.push(ChartGroupsCadastradas.exchanges_count);
                });
                // @ts-ignore
                this.chartGroupsCadastradas = new Chart('canvas2', {
                    type: 'bar',
                    data: {
                        labels: this.groupsCadastradas,
                        datasets: [
                            {
                                data: this.exchangesGroupsCadastradas,
                                borderColor: '#f00',
                                backgroundColor: '#008542',
                                fill: true
                            }
                        ]
                    },
                    options: {
                        legend: {
                            display: true,
                            labels: 'Trocas Cadastradas Por Grupos'
                        },
                        scales: {
                            xAxes: [{display: true}],
                            yAxes: [{display: true}]

                        }
                    }
                });
            });

    }

    getChartGroupsConfirmed() {
        return this.http.get('http://localhost:8000/api/charts/groups_confirmed')
            .subscribe((res: ChartGroupsConfirmed[]) => {
                res.forEach(ChartGroupsConfirmed => {
                    this.groupsConfirmed.push(ChartGroupsConfirmed.group_name);
                    this.exchangesGroupsConfirmed.push(ChartGroupsConfirmed.exchanges_count);
                });
                // @ts-ignore
                this.chartGroupsConfirmed = new Chart('canvas3', {
                    type: 'bar',
                    data: {
                        labels: this.groupsConfirmed,
                        datasets: [
                            {
                                data: this.exchangesGroupsConfirmed,
                                borderColor: '#f00',
                                backgroundColor: '#008542',
                                fill: true
                            }
                        ]
                    },
                    options: {
                        legend: {
                            display: true,
                            labels: 'Trocas Confirmadas Por Grupo'
                        },
                        scales: {
                            xAxes: [{display: true}],
                            yAxes: [{display: true}]

                        }
                    }
                });
            });

    }

    getUsersCount() {
        return this.http.get('http://localhost:8000/api/cards/users')
            .subscribe((res: CardUser[]) => {
                res.forEach(CardUser => {
                    this.users.push(CardUser.users_count);
                });
                this.users_count = this.users;
        });
    }

    getUnitsCount() {
        return this.http.get('http://localhost:8000/api/cards/units')
            .subscribe((res: CardUnit[]) => {
                res.forEach(CardUnit => {
                    this.units.push(CardUnit.units_count);
                });
                this.units_count = this.units;
            });
    }

    getSectorsCount() {
        return this.http.get('http://localhost:8000/api/cards/sectors')
            .subscribe((res: CardSector[]) => {
                res.forEach(CardSector => {
                    this.sectors.push(CardSector.sectors_count);
                });
                this.sectors_count = this.sectors;
            });
    }
}