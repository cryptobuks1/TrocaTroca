import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Unit} from "../../model";
import {SearchParams, SearchParamsBuilder} from "./http-resource";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UnitHttpService {

    private baseUrl = `${environment.api.url}/units`;

    constructor(private http: HttpClient) {
    }

    list(searchParams: SearchParams): Observable<{ data: Array<Unit>, meta: any }> {
        const sParams = new SearchParamsBuilder(searchParams).makeObject();
        const params = new HttpParams({
            fromObject: (<any>sParams)
        });
        return this.http.get<{ data: Array<Unit>, meta }>(this.baseUrl, {params});
    }

    get(id: number): Observable<Unit> {
        return this.http.get<{ data: Unit }>(`${this.baseUrl}/${id}`)
            .pipe(map(response => response.data))
    }

    create(data: Unit): Observable<Unit> {
        return this.http.post<{ data: Unit }>(this.baseUrl, data)
            .pipe(map(response => response.data))
    }

    update(id: number, data: Unit) {
        return this.http.put<{ data: Unit }>(`${this.baseUrl}/${id}`, data)
            .pipe(map(response => response.data))
    }

    destroy(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`)
    }
}
