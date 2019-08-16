import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ExchangeAuthorize} from "../../app/model";
import {ExchangeProvider} from "../../providers/exchange/exchange";

/**
 * Generated class for the ExchangeConclusionDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exchange-conclusion-detail',
  templateUrl: 'exchange-conclusion-detail.html',
})
export class ExchangeConclusionDetailPage {

    exchangeId: number;
    exchangeData: {exchangeAutorizada: ExchangeAuthorize};

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
        this.exchangeHttp.getAutorizadas(this.exchangeId)
            .subscribe( data => {
                this.exchangeData = data;
            });
    }

}
