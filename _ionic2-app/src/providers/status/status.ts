import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Status} from "../../app/model";
import {map} from "rxjs/operators";

/*
  Generated class for the StatusProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StatusProvider {

    private baseUrl = `${environment.api.url}/statuses`;

    constructor(private http: HttpClient) {
    }

    list(): Observable<Array<Status>> {
        return this.http.get<{ data: Array<Status> }>(this.baseUrl)
            .pipe(
                map(response => response.data)
            );
    }

}