import {Component, OnInit, ViewChild} from '@angular/core';
import {ExchangeAuthorizeModalComponent} from "../exchange-authorize-modal/exchange-authorize-modal.component";
import {ExchangeCancelModalComponent} from "../exchange-cancel-modal/exchange-cancel-modal.component";
import {ExchangeHttpService} from "../../../../services/http/exchange-http.service";
import {ExchangeCancelService} from "./exchange-cancel.service";
import {ExchangeAuthorizeService} from "./exchange-authorize.service";
import {ExchangeConfirm} from "../../../../model";

@Component({
  selector: 'exchange-list-confirmed',
  templateUrl: './exchange-list-confirmed.component.html',
  styleUrls: ['./exchange-list-confirmed.component.css']
})
export class ExchangeListConfirmedComponent implements OnInit {

    exchangesConfirm: Array<ExchangeConfirm> = [];
    exchangeId: number;

    pagination = {
        page: 1,
        totalItems: 0,
        itemsPerPage: 5
    };

    sortColumn = {column: '', sort: ''};
    searchText: string;

    @ViewChild(ExchangeAuthorizeModalComponent)
    exchangeAuthorizeModal: ExchangeAuthorizeModalComponent;

    @ViewChild(ExchangeCancelModalComponent)
    exchangeCancelModal: ExchangeCancelModalComponent;

    constructor(
        public exchangeHttp: ExchangeHttpService,
        protected exchangeCancelService: ExchangeCancelService,
        protected exchangeAuthorizeService: ExchangeAuthorizeService
    ) {
        this.exchangeCancelService.exchangeListConfirmedComponent = this;
        this.exchangeAuthorizeService.exchangeListConfirmedComponent = this;
    }

    ngOnInit() {
        this.getExchangesConfirmed();
    }

    getExchangesConfirmed() {
        const token = window.localStorage.getItem('token');
        this.exchangeHttp.listConfirm({
            page: this.pagination.page,
            sort: this.sortColumn.column === '' ? null : this.sortColumn,
            search: this.searchText
        })
            .subscribe(response => {
                // @ts-ignore
                this.exchangesConfirm = response.data;
                this.pagination.totalItems = response.meta.total;
            });
    }

    pageChange(page) {
        this.pagination.page = page;
        this.getExchangesConfirmed();
    }

    sort(sortColumn) {
        this.getExchangesConfirmed();
    }

    search(search) {
        this.searchText = search;
        this.getExchangesConfirmed();
    }

}
