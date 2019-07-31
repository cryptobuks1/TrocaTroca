import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {SearchParams, SearchParamsBuilder} from "./http-resource";
import {Observable} from "rxjs";
import {Log} from "../../model";

@Injectable({
  providedIn: 'root'
})
export class LogHttpService {

    private baseUrl = `${environment.api.url}/logs`;

    constructor(private http: HttpClient) {
    }

    list(searchParams: SearchParams): Observable<{ data: Array<Log>, meta: any }> {
        const sParams = new SearchParamsBuilder(searchParams).makeObject();
        const params = new HttpParams({
            fromObject: (<any>sParams)
        });
        return this.http.
        get<{ data: Array<Log>, meta: any }>
        (this.baseUrl, {params});
    }
}
