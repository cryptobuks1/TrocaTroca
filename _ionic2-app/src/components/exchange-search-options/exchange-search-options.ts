import {Component, OnInit} from '@angular/core';
import {ExchangeSearchProvider} from "../../providers/exchange-search/exchange-search";
import {StatusProvider} from "../../providers/status/status";
import {Status} from "../../app/model";
import {ViewController} from "ionic-angular";

/**
 * Generated class for the ExchangeSearchOptionsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'exchange-search-options',
  templateUrl: 'exchange-search-options.html'
})
export class ExchangeSearchOptionsComponent implements OnInit{

  statuses: Status[] = [];

  constructor(
      public exchangeSearch: ExchangeSearchProvider,
      private status: StatusProvider,
      private viewCtrl: ViewController
  ) {
  }

  ngOnInit(): void {
    this.status.list()
        .subscribe( statuses => this.statuses = statuses)
  }

  close() {
    this.viewCtrl.dismiss();
  }

  filter() {
    this.exchangeSearch.onUpdate.next(true);
    this.close();
  }

}
