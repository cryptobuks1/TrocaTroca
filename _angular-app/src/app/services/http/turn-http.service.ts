import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Turn} from "../../model";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TurnHttpService {

    private baseUrl = `${environment.api.url}/turns`;

    constructor(
        private http: HttpClient
    ) { }

    list() : Observable<{ data: Array<Turn> }> {
        return this.http.get<{data:Array<Turn>}>(this.baseUrl);
    }

    get(id: number) : Observable<Turn> {
        return this.http.get<{data: Turn}>(`${this.baseUrl}/${id}` )
            .pipe(map(response =>  response.data))
    }
}
