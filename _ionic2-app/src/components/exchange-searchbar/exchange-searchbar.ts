import {Component, EventEmitter, Output} from '@angular/core';
import {ExchangeSearchProvider} from "../../providers/exchange-search/exchange-search";
import {ModalController} from "ionic-angular";
import {ExchangeSearchOptionsComponent} from "../exchange-search-options/exchange-search-options";

/**
 * Generated class for the ExchangeSearchbarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'exchange-searchbar',
  templateUrl: 'exchange-searchbar.html'
})
export class ExchangeSearchbarComponent {

  @Output()
  onBack: EventEmitter<any> = new EventEmitter<any>();

  constructor(
      public exchangeSearch: ExchangeSearchProvider,
      private modalCtrl: ModalController
  ) {
  }

  back() {
    this.onBack.emit(true);
  }

  filter() {
    this.exchangeSearch.onUpdate.next(true);
  }

  openExchangeSearchbarOptions() {
    const  modal = this.modalCtrl.create(ExchangeSearchOptionsComponent);
    modal.present();
  }
}
