import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Unit} from "../../app/model";
import {map} from "rxjs/operators";

/*
  Generated class for the UnitProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UnitProvider {

    private baseUrl = `${environment.api.url}/units`;

    constructor(private http: HttpClient) {
    }

    list(): Observable<Array<Unit>> {
        return this.http.get<{ data: Array<Unit> }>(this.baseUrl)
            .pipe(
                map(response => response.data)
            );
    }

}
