import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ExchangeAuthorize, ExchangeConclusion, ExchangePending} from "../../app/model";
import {ExchangeProvider} from "../../providers/exchange/exchange";
import * as moment from "moment";

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
    exchangeConclusion: ExchangeConclusion;
    exchangePending: ExchangePending;

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

    conclusion() {
        this.exchangeConclusion.status_id = 4;
        // @ts-ignore
        this.exchangeConclusion.date_conclusion = moment().format('YYYY-MM-DD');
        this.exchangeHttp.updateConclusion(this.exchangeId, this.exchangeConclusion)
            .subscribe(exchangeConclusion => this.exchangeConclusion = exchangeConclusion)
    }

    pending() {
        this.exchangePending.status_id = 6;
        // @ts-ignore
        this.exchangePending.date_pending = moment().format('YYYY-MM-DD');
        this.exchangeHttp.updatePending(this.exchangeId, this.exchangePending)
            .subscribe(exchangePending => this.exchangePending = exchangePending)
    }

}
