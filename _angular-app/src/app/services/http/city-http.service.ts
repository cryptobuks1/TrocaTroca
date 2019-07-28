import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {City} from "../../model";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {SearchParams, SearchParamsBuilder} from "./http-resource";
import {environment} from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class CityHttpService {

    private baseUrl = `${environment.api.url}/cities`;

    constructor(private http: HttpClient) {
    }

    list(searchParams: SearchParams): Observable<{ data: Array<City>, meta: any }> {
        const sParams = new SearchParamsBuilder(searchParams).makeObject();
        const params = new HttpParams({
            fromObject: (<any>sParams)
        });
        return this.http.get<{ data: Array<City>, meta }>(this.baseUrl, {params});
    }

    get(id: number): Observable<City> {
        return this.http.get<{data: City}>(`${this.baseUrl}/${id}`)
            .pipe(map(response =>  response.data))
    }

    create(data: City): Observable<City> {
        return this.http.post<{ data: City }>(this.baseUrl, data)
            .pipe(map(response => response.data))
    }

    update(id: number, data: City) {
        return this.http.put<{ data: City }>(`${this.baseUrl}/${id}`, data)
            .pipe(map(response => response.data))
    }

    destroy(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`)
    }
}
