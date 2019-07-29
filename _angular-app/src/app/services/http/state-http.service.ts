import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {SearchParams, SearchParamsBuilder} from "./http-resource";
import {Observable} from "rxjs";
import {State} from "../../model";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class StateHttpService {

    private baseUrl = `${environment.api.url}/states`;

    constructor(
        private http: HttpClient
    ) { }

    list(): Observable<{ data: Array<State> }> {
        return this.http.get<{data: Array<State>}>(this.baseUrl);
    }

    get(id: number): Observable<State> {
        return this.http.get<{data: State}>(`${this.baseUrl}/${id}` )
            .pipe(map(response =>  response.data));
    }
}
