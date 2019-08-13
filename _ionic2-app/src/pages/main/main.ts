import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController} from 'ionic-angular';
import {ExchangeListComponent} from "../../components/exchange-list/exchange-list";
import {RedirectIfNotAuthProvider} from "../../providers/auth/redirect-if-not-auth";
import {MoreOptionsComponent} from "../../components/more-options/more-options";

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  enchangeList = ExchangeListComponent

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private redirectIfNotAuth: RedirectIfNotAuthProvider,
      private popover: PopoverController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  presentMoreOptions(event) {
    const popover = this.popover.create(MoreOptionsComponent);

    popover.present({
        ev: event
    })
  }
}
