import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Turn} from "../../app/model";
import {map} from "rxjs/operators";

/*
  Generated class for the TurnProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TurnProvider {

    private baseUrl = `${environment.api.url}/turns`;

    constructor(private http: HttpClient) {
    }

    list(): Observable<Array<Turn>> {
        return this.http.get<{ data: Array<Turn> }>(this.baseUrl)
            .pipe(
                map(response => response.data)
            );
    }

}
