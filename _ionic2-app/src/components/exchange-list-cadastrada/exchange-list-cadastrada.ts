import { Component } from '@angular/core';
import {Exchange} from "../../app/model";
import {App, InfiniteScroll, Refresher, Toast, ToastController} from "ionic-angular";
import {ExchangeProvider} from "../../providers/exchange/exchange";
import {ExchangeSearchProvider} from "../../providers/exchange-search/exchange-search";
import {ExchangeDetailPage} from "../../pages/exchange-detail/exchange-detail";
import {ExchangeConfirmDetailPage} from "../../pages/exchange-confirm-detail/exchange-confirm-detail";

/**
 * Generated class for the ExchangeListCadastradaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'exchange-list-cadastrada',
  templateUrl: 'exchange-list-cadastrada.html'
})
export class ExchangeListCadastradaComponent {

    exchangesCadastradas: {data: Exchange[]} = {
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
                    this.exchangesCadastradas = exchanges
                }, () => this.finishLoading());
        });
        this.getExchanges()
            .subscribe(exchanges => this.exchangesCadastradas = exchanges);
    }

    doInfinite(infiniteScroll: InfiniteScroll) {
        this.page++;
        this.getExchanges().subscribe(exchanges => {
            this.exchangesCadastradas.data.push(...exchanges.data);
            if (!exchanges.data.length) {
                this.canMoreExchanges = false;
            }
            infiniteScroll.complete();
        }, () => infiniteScroll.complete());
    }

    getExchanges() {
        return this.exchangeHttp.listCadastradas(this.page);
    }

    doRefresh(refresher: Refresher) {
        this.reset();
        this.getExchanges().subscribe(exchanges => {
            this.exchangesCadastradas = exchanges;
            refresher.complete();
        }, () => refresher.complete());
    }

    reset() {
        this.page = 1;
        this.canMoreExchanges = true;
    }

    openExchangeConfirmDetail(exchangeId) {
        this.app.getRootNav().push(ExchangeConfirmDetailPage, {exchange: exchangeId});
    }

}
