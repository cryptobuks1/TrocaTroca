import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Exchange, ExchangeAuthorize, ExchangeCancel, ExchangeConfirm} from "../../app/model";
import {ExchangeProvider} from "../../providers/exchange/exchange";
import * as moment from "moment";

/**
 * Generated class for the ExchangeAuthorizeDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exchange-authorize-detail',
  templateUrl: 'exchange-authorize-detail.html',
})
export class ExchangeAuthorizeDetailPage {

    exchangeId: number;
    exchangeData: {exchangeConfirmada: ExchangeConfirm};
    exchangeAuthorize: ExchangeAuthorize;
    exchangeCancel: ExchangeCancel;

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
        this.exchangeHttp.getConfirmadas(this.exchangeId)
            .subscribe( data => {
                this.exchangeData = data;
            });
    }

    authorize() {
        this.exchangeAuthorize.status_id = 1;
        // @ts-ignore
        this.exchangeAuthorize.date_autorization = moment().format('YYYY-MM-DD');
        this.exchangeHttp.updateAutorize(this.exchangeId, this.exchangeAuthorize)
            .subscribe(exchangeAuthorize => this.exchangeAuthorize = exchangeAuthorize)
    }

    cancel() {
        this.exchangeCancel.status_id = 3;
        // @ts-ignore
        this.exchangeCancel.date_cancelation = moment().format('YYYY-MM-DD');
        this.exchangeHttp.updateCancel(this.exchangeId, this.exchangeCancel)
            .subscribe(exchangeCancel => this.exchangeCancel = exchangeCancel)
    }

}
