import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Type} from "../../app/model";
import {map} from "rxjs/operators";

/*
  Generated class for the TypeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TypeProvider {

    private baseUrl = `${environment.api.url}/types`;

    constructor(private http: HttpClient) {
    }

    list(): Observable<Array<Type>> {
        return this.http.get<{ data: Array<Type> }>(this.baseUrl)
            .pipe(
                map(response => response.data)
            );
    }

}
