import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {User} from "../../app/model";
import {map} from "rxjs/operators";

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

    private baseUrl = `${environment.api.url}/users`;

    constructor(private http: HttpClient) {
    }

    list(): Observable<Array<User>> {
        return this.http.get<{ data: Array<User> }>(this.baseUrl)
            .pipe(
                map(response => response.data)
            );
    }

}
