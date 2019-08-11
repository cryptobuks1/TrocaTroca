import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Exchange} from "../../app/model";

/*
  Generated class for the ExchangeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ExchangeProvider {

    private baseUrl = `${environment.api.url}/exchanges`;

    constructor(public http: HttpClient) {
        console.log('Hello ExchangeProvider Provider');
    }

    listAll(): Observable<{ data: Array<Exchange> }> {
        return this.http.get<{ data: Array<Exchange> }>(`${this.baseUrl}/all`);
    }

}
