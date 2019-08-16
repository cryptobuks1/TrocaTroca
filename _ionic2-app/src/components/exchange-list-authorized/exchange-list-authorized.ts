import { Component } from '@angular/core';
import {ExchangeAuthorize} from "../../app/model";
import {App, InfiniteScroll, Refresher, Toast, ToastController} from "ionic-angular";
import {ExchangeProvider} from "../../providers/exchange/exchange";
import {ExchangeSearchProvider} from "../../providers/exchange-search/exchange-search";
import {ExchangeAuthorizeDetailPage} from "../../pages/exchange-authorize-detail/exchange-authorize-detail";
import {ExchangeConclusionDetailPage} from "../../pages/exchange-conclusion-detail/exchange-conclusion-detail";

/**
 * Generated class for the ExchangeListAuthorizedComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'exchange-list-authorized',
  templateUrl: 'exchange-list-authorized.html'
})
export class ExchangeListAuthorizedComponent {

    exchangesAutorizadas: {data: ExchangeAuthorize[]} = {
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
                    this.exchangesAutorizadas = exchanges
                }, () => this.finishLoading());
        });
        this.getExchanges()
            .subscribe(exchanges => this.exchangesAutorizadas = exchanges);
    }

    doInfinite(infiniteScroll: InfiniteScroll) {
        this.page++;
        this.getExchanges().subscribe(exchanges => {
            this.exchangesAutorizadas.data.push(...exchanges.data);
            if (!exchanges.data.length) {
                this.canMoreExchanges = false;
            }
            infiniteScroll.complete();
        }, () => infiniteScroll.complete());
    }

    getExchanges() {
        return this.exchangeHttp.listAutorizadas(this.page);
    }

    doRefresh(refresher: Refresher) {
        this.reset();
        this.getExchanges().subscribe(exchanges => {
            this.exchangesAutorizadas = exchanges;
            refresher.complete();
        }, () => refresher.complete());
    }

    reset() {
        this.page = 1;
        this.canMoreExchanges = true;
    }

    openExchangeConclusionDetail(exchangeId) {
        this.app.getRootNav().push(ExchangeConclusionDetailPage, {exchange: exchangeId});
    }

}
