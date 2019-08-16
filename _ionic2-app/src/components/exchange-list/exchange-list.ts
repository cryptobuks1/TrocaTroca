import {Component, OnInit} from '@angular/core';
import {ExchangeProvider} from "../../providers/exchange/exchange";
import {Exchange} from "../../app/model";
import {App, InfiniteScroll, LoadingController, Refresher, Toast, ToastController} from "ionic-angular";
import {ExchangeSearchProvider} from "../../providers/exchange-search/exchange-search";
import {ExchangeDetailPage} from "../../pages/exchange-detail/exchange-detail";

/**
 * Generated class for the ExchangeListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'exchange-list',
  templateUrl: 'exchange-list.html'
})
export class ExchangeListComponent implements OnInit{

  exchanges: {data: Exchange[]} = {
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
  }/**/

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
                  this.exchanges = exchanges
              }, () => this.finishLoading());
      });
      this.getExchanges()
          .subscribe(exchanges => this.exchanges = exchanges);
  }

  doInfinite(infiniteScroll: InfiniteScroll) {
      this.page++;
      this.getExchanges().subscribe(exchanges => {
          this.exchanges.data.push(...exchanges.data);
          if (!exchanges.data.length) {
              this.canMoreExchanges = false;
          }
          infiniteScroll.complete();
      }, () => infiniteScroll.complete());
  }

  getExchanges() {
      return this.exchangeHttp.list(this.page);
  }

  doRefresh(refresher: Refresher) {
      this.reset();
      this.getExchanges().subscribe(exchanges => {
          this.exchanges = exchanges;
          refresher.complete();
      }, () => refresher.complete());
  }

  reset() {
      this.page = 1;
      this.canMoreExchanges = true;
  }

  openExchangeDetail(exchangeId) {
      this.app.getRootNav().push(ExchangeDetailPage, {exchange: exchangeId});
  }
}
