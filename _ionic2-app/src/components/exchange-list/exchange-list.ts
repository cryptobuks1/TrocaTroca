import {Component, OnInit} from '@angular/core';
import {ExchangeProvider} from "../../providers/exchange/exchange";
import {Exchange} from "../../app/model";
import {InfiniteScroll, Refresher} from "ionic-angular";
import {ExchangeSearchProvider} from "../../providers/exchange-search/exchange-search";

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

  constructor(
      private exchange: ExchangeProvider,
      private exchangeSearch: ExchangeSearchProvider
  ) {
  }

  ngOnInit(): void {
      this.exchangeSearch.onUpdate.subscribe(() => {
          this.getExchanges()
              .subscribe(exchanges => this.exchanges = exchanges);
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
      return this.exchange.list(this.page);
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

}
