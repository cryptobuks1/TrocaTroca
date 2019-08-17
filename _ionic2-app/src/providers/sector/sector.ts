import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Sector} from "../../app/model";
import {map} from "rxjs/operators";

/*
  Generated class for the SectorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SectorProvider {

    private baseUrl = `${environment.api.url}/sectors`;

    constructor(private http: HttpClient) {
    }

    list(): Observable<Array<Sector>> {
        return this.http.get<{ data: Array<Sector> }>(this.baseUrl)
            .pipe(
                map(response => response.data)
            );
    }

}
