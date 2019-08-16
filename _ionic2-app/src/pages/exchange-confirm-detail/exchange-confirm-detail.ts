import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Exchange} from "../../app/model";
import {ExchangeProvider} from "../../providers/exchange/exchange";

/**
 * Generated class for the ExchangeConfirmDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exchange-confirm-detail',
  templateUrl: 'exchange-confirm-detail.html',
})
export class ExchangeConfirmDetailPage {

    exchangeId: number;
    exchangeData: {exchangeCadastrada: Exchange};

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
        this.exchangeHttp.getCadastradas(this.exchangeId)
            .subscribe( data => {
                this.exchangeData = data;
            });
    }

}
