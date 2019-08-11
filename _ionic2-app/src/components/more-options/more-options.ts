import { Component } from '@angular/core';

/**
 * Generated class for the MoreOptionsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'more-options',
  templateUrl: 'more-options.html'
})
export class MoreOptionsComponent {

  text: string;

  constructor() {
    console.log('Hello MoreOptionsComponent Component');
    this.text = 'Hello World';
  }

}
