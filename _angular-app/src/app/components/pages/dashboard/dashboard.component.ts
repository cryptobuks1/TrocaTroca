import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import {
    CardSector,
    CardUnit,
    CardUser, ChartDatesConfirmed,
    ChartGroupsCadastradas,
    ChartGroupsConfirmed,
    ChartStatus, ChartUnitsConfirmed, ChartUnitsCadatradas,
    Status, ChartUnitsAuthorized, ChartDatesCadastradas, ChartDatesAuthorized
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
    groupsConclusion = [];
    groupsAuthorized = [];
    unitsCadastradas = [];
    unitsConfirmed = [];
    unitsAuthorized = [];
    datesCadastradas = [];
    datesConfirmed = [];
    datesAuthorized = [];
    exchanges = [];
    exchangesGroupsCadastradas = [];
    exchangesGroupsConfirmed = [];
    exchangesGroupsConclusion = [];
    exchangesGroupsAuthorized = [];
    exchangesUnitsCadastradas = [];
    exchangesUnitsConfirmed = [];
    exchangesUnitsAuthorized = [];
    exchangesDatesCadastradas = [];
    exchangesDatesConfirmed = [];
    exchangesDatesAuthorized = [];
    status: Status[];
    chartStatus = [];
    chartGroupsCadastradas = [];
    chartGroupsConfirmed = [];
    chartGroupsConclusion = [];
    chartGroupsAuthorized = [];
    chartDatesCadastradas = [];
    chartDatesConfirmed = [];
    chartDatesAuthorized = [];
    chartUnitsCadastradas = [];
    chartUnitsConfirmed = [];
    chartUnitsAuthorized = [];
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
        //this.getChartGroupsConclusion();
        this.getChartGroupsAuthorized();
        this.getChartUnitsCadastradas();
        this.getChartUnitsConfirmed();
        this.getChartUnitsAuthorized();
        this.getChartDatesCadastradas();
        this.getChartDatesConfirmed();
        this.getChartDatesAuthorized();
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

    getChartGroupsConclusion() {
        return this.http.get('http://localhost:8000/api/charts/groups_conclusion')
            .subscribe((res: ChartGroupsCadastradas[]) => {
                res.forEach(ChartGroupsCadastradas => {
                    this.groupsConclusion.push(ChartGroupsCadastradas.group_name);
                    this.exchangesGroupsConclusion.push(ChartGroupsCadastradas.exchanges_count);
                });
                // @ts-ignore
                this.chartGroupsConclusion = new Chart('canvas4', {
                    type: 'bar',
                    data: {
                        labels: this.groupsConclusion,
                        datasets: [
                            {
                                data: this.exchangesGroupsConclusion,
                                borderColor: '#f00',
                                backgroundColor: '#008542',
                                fill: true
                            }
                        ]
                    },
                    options: {
                        legend: {
                            display: true,
                            labels: 'Trocas Concluidas Por Grupos'
                        },
                        scales: {
                            xAxes: [{display: true}],
                            yAxes: [{display: true}]

                        }
                    }
                });
            });

    }

    getChartGroupsAuthorized() {
        return this.http.get('http://localhost:8000/api/charts/groups_authorized')
            .subscribe((res: ChartGroupsConfirmed[]) => {
                res.forEach(ChartGroupsConfirmed => {
                    this.groupsAuthorized.push(ChartGroupsConfirmed.group_name);
                    this.exchangesGroupsAuthorized.push(ChartGroupsConfirmed.exchanges_count);
                });
                // @ts-ignore
                this.chartGroupsAuthorized = new Chart('canvas5', {
                    type: 'bar',
                    data: {
                        labels: this.groupsAuthorized,
                        datasets: [
                            {
                                data: this.exchangesGroupsAuthorized,
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

    getChartUnitsCadastradas() {
        return this.http.get('http://localhost:8000/api/charts/units_cadastradas')
            .subscribe((res: ChartUnitsCadatradas[]) => {
                res.forEach(ChartUnitsCadastradas => {
                    this.unitsCadastradas.push(ChartUnitsCadastradas.unit_name);
                    this.exchangesUnitsCadastradas.push(ChartUnitsCadastradas.exchanges_count);
                });
                // @ts-ignore
                this.chartUnitsCadastradas = new Chart('canvas6', {
                    type: 'bar',
                    data: {
                        labels: this.unitsCadastradas,
                        datasets: [
                            {
                                data: this.exchangesUnitsCadastradas,
                                borderColor: '#f00',
                                backgroundColor: '#008542',
                                fill: true
                            }
                        ]
                    },
                    options: {
                        legend: {
                            display: true,
                            labels: 'Trocas Cadastradas Por Unidade'
                        },
                        scales: {
                            xAxes: [{display: true}],
                            yAxes: [{display: true}]

                        }
                    }
                });
            });

    }

    getChartUnitsConfirmed() {
        return this.http.get('http://localhost:8000/api/charts/units_confirmed')
            .subscribe((res: ChartUnitsConfirmed[]) => {
                res.forEach(ChartUnitsConfirmed => {
                    this.unitsConfirmed.push(ChartUnitsConfirmed.unit_name);
                    this.exchangesUnitsConfirmed.push(ChartUnitsConfirmed.exchanges_count);
                });
                // @ts-ignore
                this.chartUnitsConfirmed = new Chart('canvas7', {
                    type: 'bar',
                    data: {
                        labels: this.unitsConfirmed,
                        datasets: [
                            {
                                data: this.exchangesUnitsConfirmed,
                                borderColor: '#f00',
                                backgroundColor: '#008542',
                                fill: true
                            }
                        ]
                    },
                    options: {
                        legend: {
                            display: true,
                            labels: 'Trocas Confirmadas Por Unidade'
                        },
                        scales: {
                            xAxes: [{display: true}],
                            yAxes: [{display: true}]

                        }
                    }
                });
            });

    }

    getChartUnitsAuthorized() {
        return this.http.get('http://localhost:8000/api/charts/units_authorized')
            .subscribe((res: ChartUnitsAuthorized[]) => {
                res.forEach(ChartUnitsAuthorized => {
                    this.unitsAuthorized.push(ChartUnitsAuthorized.unit_name);
                    this.exchangesUnitsAuthorized.push(ChartUnitsAuthorized.exchanges_count);
                });
                // @ts-ignore
                this.chartUnitsAuthorized = new Chart('canvas8', {
                    type: 'bar',
                    data: {
                        labels: this.unitsAuthorized,
                        datasets: [
                            {
                                data: this.exchangesUnitsAuthorized,
                                borderColor: '#f00',
                                backgroundColor: '#008542',
                                fill: true
                            }
                        ]
                    },
                    options: {
                        legend: {
                            display: true,
                            labels: 'Trocas Confirmadas Por Unidade'
                        },
                        scales: {
                            xAxes: [{display: true}],
                            yAxes: [{display: true}]

                        }
                    }
                });
            });

    }

    getChartDatesCadastradas() {
        return this.http.get('http://localhost:8000/api/charts/dates_cadastradas')
            .subscribe((res: ChartDatesCadastradas[]) => {
                res.forEach(ChartDatesCadastradas => {
                    this.datesCadastradas.push(ChartDatesCadastradas.data);
                    this.exchangesDatesCadastradas.push(ChartDatesCadastradas.exchanges_count);
                });
                // @ts-ignore
                this.chartDatesCadastradas = new Chart('canvas9', {
                    type: 'bar',
                    data: {
                        //labels: this.datesCadastradas,
                        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
                        datasets: [
                            {
                                data: this.exchangesDatesCadastradas,
                                borderColor: '#f00',
                                backgroundColor: '#008542',
                                fill: true
                            }
                        ]
                    },
                    options: {
                        legend: {
                            display: true,
                            labels: 'Trocas Cadastradas Por Mes'
                        },
                        scales: {
                            xAxes: [{display: true}],
                            yAxes: [{display: true}]

                        }
                    }
                });
            });

    }

    getChartDatesConfirmed() {
        return this.http.get('http://localhost:8000/api/charts/dates_confirmed')
            .subscribe((res: ChartDatesConfirmed[]) => {
                res.forEach(ChartDatesConfirmed => {
                    this.datesConfirmed.push(ChartDatesConfirmed.data);
                    this.exchangesDatesConfirmed.push(ChartDatesConfirmed.exchanges_count);
                });
                // @ts-ignore
                this.chartDatesConfirmed = new Chart('canvas10', {
                    type: 'bar',
                    data: {
                        //labels: this.datesConfirmed,
                        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
                        datasets: [
                            {
                                data: this.exchangesDatesConfirmed,
                                borderColor: '#f00',
                                backgroundColor: '#008542',
                                fill: true
                            }
                        ]
                    },
                    options: {
                        legend: {
                            display: true,
                            labels: 'Trocas Confirmadas Por Mes'
                        },
                        scales: {
                            xAxes: [{display: true}],
                            yAxes: [{display: true}]

                        }
                    }
                });
            });

    }

    getChartDatesAuthorized() {
        return this.http.get('http://localhost:8000/api/charts/dates_authorized')
            .subscribe((res: ChartDatesAuthorized[]) => {
                res.forEach(ChartDatesAuthorized => {
                    this.datesAuthorized.push(ChartDatesAuthorized.data);
                    this.exchangesDatesAuthorized.push(ChartDatesAuthorized.exchanges_count);
                });
                // @ts-ignore
                this.chartDatesAuthorized = new Chart('canvas11', {
                    type: 'bar',
                    data: {
                        //labels: this.datesAuthorized,
                        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
                        datasets: [
                            {
                                data: this.exchangesDatesAuthorized,
                                borderColor: '#f00',
                                backgroundColor: '#008542',
                                fill: true
                            }
                        ]
                    },
                    options: {
                        legend: {
                            display: true,
                            labels: 'Trocas Autorizadas Por Mes'
                        },
                        scales: {
                            xAxes: [{display: true, minBarLength: 0}],
                            yAxes: [{display: true, minBarLength: 0}]

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