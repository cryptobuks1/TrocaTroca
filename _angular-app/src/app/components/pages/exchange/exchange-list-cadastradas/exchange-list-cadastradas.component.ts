import {Component, OnInit, ViewChild} from '@angular/core';
import {Exchange} from "../../../../model";
import {ExchangeConfirmModalComponent} from "../exchange-confirm-modal/exchange-confirm-modal.component";
import {ExchangeDeclineModalComponent} from "../exchange-decline-modal/exchange-decline-modal.component";
import {ExchangeHttpService} from "../../../../services/http/exchange-http.service";
import {ExchangeConfirmService} from "./exchange-confirm.service";
import {ExchangeDeclineService} from "./exchange-decline.service";

@Component({
  selector: 'exchange-list-cadastradas',
  templateUrl: './exchange-list-cadastradas.component.html',
  styleUrls: ['./exchange-list-cadastradas.component.css']
})
export class ExchangeListCadastradasComponent implements OnInit {

    exchangesCadastradas: Array<Exchange> = [];
    exchangeId: number;

    pagination = {
        page: 1,
        totalItems: 0,
        itemsPerPage: 5
    };

    sortColumn = {column: '', sort: ''};
    searchText: string;

    @ViewChild(ExchangeConfirmModalComponent)
    exchangeConfirmModal: ExchangeConfirmModalComponent;

    @ViewChild(ExchangeDeclineModalComponent)
    exchangeDeclineModal: ExchangeDeclineModalComponent;

    constructor(
        public exchangeHttp: ExchangeHttpService,
        protected exchangeConfirmService: ExchangeConfirmService,
        protected exchangeDeclineService: ExchangeDeclineService
    ) {
        this.exchangeConfirmService.exchangeListCadastradasComponent = this;
        this.exchangeDeclineService.exchangeListCadastradasComponent = this;
    }

    ngOnInit() {
        this.getExchangesCadastradas();
    }

    getExchangesCadastradas() {
        this.exchangeHttp.listCadastradas({
            page: this.pagination.page,
            sort: this.sortColumn.column === '' ? null : this.sortColumn,
            search: this.searchText
        })
            .subscribe(response => {
                this.exchangesCadastradas = response.data;
                this.pagination.totalItems = response.meta.total;
            });
    }

    pageChange(page) {
        this.pagination.page = page;
        this.getExchangesCadastradas();
    }

    sort(sortColumn) {
        this.getExchangesCadastradas();
    }

    search(search) {
        this.searchText = search;
        this.getExchangesCadastradas();
    }

}
