import {Component, OnInit, ViewChild} from '@angular/core';
import {Exchange} from "../../../../model";
import {ExchangeNewModalComponent} from "../exchange-new-modal/exchange-new-modal.component";
import {ExchangeHttpService} from "../../../../services/http/exchange-http.service";
import {ExchangeInsertService} from "./exchange-insert.service";
import {ExchangeViewService} from "./exchange-view.service";
import {ExchangeViewModalComponent} from "../exchange-view-modal/exchange-view-modal.component";

@Component({
  selector: 'exchange-list',
  templateUrl: './exchange-list.component.html',
  styleUrls: ['./exchange-list.component.css']
})
export class ExchangeListComponent implements OnInit {

    exchanges: Array<Exchange> = [];

    pagination = {
        page: 1,
        totalItems: 0,
        itemsPerPage: 5
    };

    sortColumn = {column: '', sort: ''};
    searchText: string;

    @ViewChild(ExchangeNewModalComponent)
    exchangeNewModal: ExchangeNewModalComponent;

    @ViewChild(ExchangeViewModalComponent)
    exchangeViewModal: ExchangeViewModalComponent;

    exchangeId: number;

    userId: number;

    constructor(
        public exchangeHttp: ExchangeHttpService,
        protected exchangeInsertService: ExchangeInsertService,
        protected exchangeViewService: ExchangeViewService
    ) {
        this.exchangeInsertService.exchangeListComponent = this;
        this.exchangeViewService.exchangeListComponent = this;
    }

    ngOnInit() {
        this.getExchanges();
    }

    getExchanges() {
        this.exchangeHttp.list({
            page: this.pagination.page,
            sort: this.sortColumn.column === '' ? null : this.sortColumn,
            search: this.searchText
        })
            .subscribe(response => {
                this.exchanges = response.data;
                this.pagination.totalItems = response.meta.total;
            })
    }

    pageChange(page) {
        this.pagination.page = page;
        this.getExchanges();
    }

    sort(sortColumn) {
        this.getExchanges();
    }

    search(search) {
        this.searchText = search;
        this.getExchanges();
    }

}
