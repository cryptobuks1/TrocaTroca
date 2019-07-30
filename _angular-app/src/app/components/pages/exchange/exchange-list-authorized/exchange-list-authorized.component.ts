import {Component, OnInit, ViewChild} from '@angular/core';
import {ExchangePendingService} from "./exchange-pending.service";
import {ExchangeConclusionService} from "./exchange-conclusion.service";
import {ExchangeHttpService} from "../../../../services/http/exchange-http.service";
import {ExchangePendingModalComponent} from "../exchange-pending-modal/exchange-pending-modal.component";
import {ExchangeConclusionModalComponent} from "../exchange-conclusion-modal/exchange-conclusion-modal.component";
import {ExchangeAuthorize} from "../../../../model";

@Component({
  selector: 'exchange-list-authorized',
  templateUrl: './exchange-list-authorized.component.html',
  styleUrls: ['./exchange-list-authorized.component.css']
})
export class ExchangeListAuthorizedComponent implements OnInit {

    exchangesAuthorize: Array<ExchangeAuthorize> = [];
    exchangeId: number;

    pagination = {
        page: 1,
        totalItems: 0,
        itemsPerPage: 5
    };

    sortColumn = {column: '', sort: ''};
    searchText: string;

    @ViewChild(ExchangeConclusionModalComponent)
    exchangeConclusionModal: ExchangeConclusionModalComponent;

    @ViewChild(ExchangePendingModalComponent)
    exchangePendingModal: ExchangePendingModalComponent;

    constructor(
        public exchangeHttp: ExchangeHttpService,
        protected exchangeConclusionService: ExchangeConclusionService,
        protected exchangePendingService: ExchangePendingService
    ) {
        this.exchangeConclusionService.exchangeListAuthorizedComponent = this;
        this.exchangePendingService.exchangeListAuthorizedComponent = this;
    }

    ngOnInit() {
        this.getExchangesAuthorize();
    }

    getExchangesAuthorize() {
        this.exchangeHttp.listAuthorize({
            page: this.pagination.page,
            sort: this.sortColumn.column === '' ? null : this.sortColumn,
            search: this.searchText
        })
            .subscribe(response => {
                // @ts-ignore
                this.exchangesAuthorize = response.data;
                this.pagination.totalItems = response.meta.total;
            });
    }

    pageChange(page) {
        this.pagination.page = page;
        this.getExchangesAuthorize();
    }

    sort(sortColumn) {
        this.getExchangesAuthorize();
    }

    search(search) {
        this.searchText = search;
        this.getExchangesAuthorize();
    }
}
