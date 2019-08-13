import { Component } from '@angular/core';

/**
 * Generated class for the ExchangeListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'exchange-list',
  templateUrl: 'exchange-list.html'
})
export class ExchangeListComponent {

  text: string;

  constructor() {
    console.log('Hello ExchangeListComponent Component');
    this.text = 'Hello World';
  }

}
