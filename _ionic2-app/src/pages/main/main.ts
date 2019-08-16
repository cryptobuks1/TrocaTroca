import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController} from 'ionic-angular';
import {ExchangeListComponent} from "../../components/exchange-list/exchange-list";
import {RedirectIfNotAuthProvider} from "../../providers/auth/redirect-if-not-auth";
import {MoreOptionsComponent} from "../../components/more-options/more-options";
import {SuperTabs} from "ionic2-super-tabs";
import {ExchangeListCadastradaComponent} from "../../components/exchange-list-cadastrada/exchange-list-cadastrada";
import {ExchangeListConfirmedComponent} from "../../components/exchange-list-confirmed/exchange-list-confirmed";
import {ExchangeListAuthorizedComponent} from "../../components/exchange-list-authorized/exchange-list-authorized";

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

  enchangeList = ExchangeListComponent;
  exchangeListCadastrada = ExchangeListCadastradaComponent;
  exchangeListConfirmada = ExchangeListConfirmedComponent;
  exchangeListAutorizada = ExchangeListAuthorizedComponent;

  canShowSearchbar = false;

  @ViewChild(SuperTabs)
  superTabs: SuperTabs;

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

  get canShowSearchIcon() {
    const superTab = this.superTabs.getActiveTab();
    return superTab.tabId === "exchanges" || superTab.tabId === "exchangesCadastradas" || superTab.tabId === "exchangesConfirmadas" || superTab.tabId === "exchangesAutorizadas";
  }

  onTabSelect(event) {
    if (event.id !== "exchanges" || event.id !== "exchangesCadastradas" || event.id !== "exchangesConfirmadas" || event.id !== "exchangesAutorizadas") {
      this.canShowSearchbar = false;
    }
  }
}
