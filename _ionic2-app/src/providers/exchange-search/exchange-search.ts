import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

/*
  Generated class for the ExchangeSearchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ExchangeSearchProvider {

  options = {
    orderBy: 'latest',
    search: ''
  };

  onUpdate = new Subject<any>();

}
