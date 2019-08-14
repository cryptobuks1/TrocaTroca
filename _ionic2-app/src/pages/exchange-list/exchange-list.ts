import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ExchangeProvider} from "../../providers/exchange/exchange";
import {Exchange} from "../../app/model";

/**
 * Generated class for the ExchangeListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exchange-list',
  templateUrl: 'exchange-list.html',
})
export class ExchangeListPage {

  exchanges: Array<Exchange> = [];

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private exchange: ExchangeProvider
  ) {
  }

  ionViewDidLoad() {
    // this.getExchanges();
  }

    /*getExchanges() {
        this.exchange.list()
            .subscribe(response => {
                this.exchanges = response.data;
            })
    }*/

}
