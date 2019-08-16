import { Component } from '@angular/core';
import {ExchangeConfirm} from "../../app/model";
import {App, InfiniteScroll, Refresher, Toast, ToastController} from "ionic-angular";
import {ExchangeProvider} from "../../providers/exchange/exchange";
import {ExchangeSearchProvider} from "../../providers/exchange-search/exchange-search";
import {ExchangeAuthorizeDetailPage} from "../../pages/exchange-authorize-detail/exchange-authorize-detail";

/**
 * Generated class for the ExchangeListConfirmedComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'exchange-list-confirmed',
  templateUrl: 'exchange-list-confirmed.html'
})
export class ExchangeListConfirmedComponent {

    exchangesConfirmadas: {data: ExchangeConfirm[]} = {
        data: []
    };

    page = 1;
    canMoreExchanges = true;
    toastLoading: Toast;

    constructor(
        private exchangeHttp: ExchangeProvider,
        private exchangeSearch: ExchangeSearchProvider,
        private toastCtrl: ToastController,
        private app: App
    ) {
    }

    startLoading() {
        if (this.toastLoading) {
            this.toastLoading.dismiss();
        }

        this.toastLoading = this.toastCtrl.create({
            message: "Carregando..."
        });
        this.toastLoading.present();
    }

    finishLoading() {
        this.toastLoading.dismiss();
    }

    ngOnInit(): void {
        this.exchangeSearch.onUpdate.subscribe(() => {
            this.startLoading();
            this.reset();
            this.getExchanges()
                .subscribe(exchanges => {
                    this.finishLoading();
                    this.exchangesConfirmadas = exchanges
                }, () => this.finishLoading());
        });
        this.getExchanges()
            .subscribe(exchanges => this.exchangesConfirmadas = exchanges);
    }

    doInfinite(infiniteScroll: InfiniteScroll) {
        this.page++;
        this.getExchanges().subscribe(exchanges => {
            this.exchangesConfirmadas.data.push(...exchanges.data);
            if (!exchanges.data.length) {
                this.canMoreExchanges = false;
            }
            infiniteScroll.complete();
        }, () => infiniteScroll.complete());
    }

    getExchanges() {
        return this.exchangeHttp.listConfirmadas(this.page);
    }

    doRefresh(refresher: Refresher) {
        this.reset();
        this.getExchanges().subscribe(exchanges => {
            this.exchangesConfirmadas = exchanges;
            refresher.complete();
        }, () => refresher.complete());
    }

    reset() {
        this.page = 1;
        this.canMoreExchanges = true;
    }

    openExchangeAuthorizeDetail(exchangeId) {
        this.app.getRootNav().push(ExchangeAuthorizeDetailPage, {exchange: exchangeId});
    }

}
