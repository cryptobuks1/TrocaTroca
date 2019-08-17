import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Group} from "../../app/model";
import {map} from "rxjs/operators";

/*
  Generated class for the GroupProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GroupProvider {

    private baseUrl = `${environment.api.url}/groups`;

    constructor(private http: HttpClient) {
    }

    list(): Observable<Array<Group>> {
        return this.http.get<{ data: Array<Group> }>(this.baseUrl)
            .pipe(
                map(response => response.data)
            );
    }

}
