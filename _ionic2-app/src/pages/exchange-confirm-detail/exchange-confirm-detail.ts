import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Exchange, ExchangeConfirm, ExchangeDecline} from "../../app/model";
import {ExchangeProvider} from "../../providers/exchange/exchange";
import * as moment from 'moment';

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
    exchangeConfirm: ExchangeConfirm;
    exchangeDecline: ExchangeDecline;

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

    confirm() {
        this.exchangeConfirm.status_id = 5;
        // @ts-ignore
        this.exchangeConfirm.date_confirmation = moment().format('YYYY-MM-DD');
        this.exchangeHttp.updateConfirm(this.exchangeId, this.exchangeConfirm)
            .subscribe(exchangeConfirm => this.exchangeConfirm = exchangeConfirm)
    }

    decline() {
        this.exchangeDecline.status_id = 7;
        // @ts-ignore
        this.exchangeDecline.date_declination = moment().format('YYYY-MM-DD');
        this.exchangeHttp.updateDecline(this.exchangeId, this.exchangeDecline)
            .subscribe(exchangeDecline => this.exchangeDecline = exchangeDecline)
    }

}
