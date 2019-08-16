import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ExchangeProvider} from "../../providers/exchange/exchange";
import {Exchange} from "../../app/model";

/**
 * Generated class for the ExchangeDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exchange-detail',
  templateUrl: 'exchange-detail.html',
})
export class ExchangeDetailPage implements OnInit{

  exchangeId: number;
  exchangeData: {exchange: Exchange};

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private exchangeHttp: ExchangeProvider
  ) {
    this.exchangeId = this.navParams.get('exchange');
  }

  ionViewDidEnter() {
    /*this.exchangeHttp.get(this.exchangeId)
        .subscribe( data => {
          console.log(data);
          this.exchangeData = data;
          console.log(this.exchangeData);
        });*/
  }

    ngOnInit(): void {
        this.exchangeHttp.get(this.exchangeId)
            .subscribe( data => {
                console.log(data);
                this.exchangeData = data;
                console.log(this.exchangeData);
                console.log(this.exchangeData.id);
            });
    }

}
