import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Sector} from "../../model";
import {SearchParams, SearchParamsBuilder} from "./http-resource";
import {environment} from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class SectorHttpService {

    private baseUrl = `${environment.api.url}/sectors`;

    constructor(private http: HttpClient) {
    }

    list(searchParams: SearchParams): Observable<{ data: Array<Sector>, meta: any }> {
        const sParams = new SearchParamsBuilder(searchParams).makeObject();
        const params = new HttpParams({
            fromObject: (<any>sParams)
        });
        return this.http.
            get<{ data: Array<Sector>, meta: any }>
            (this.baseUrl, {params});
    }

    get(id: number): Observable<Sector> {
        return this.http.get<{ data: Sector }>(`${this.baseUrl}/${id}`)
            .pipe(map(response => response.data))
    }

    create(data: Sector): Observable<Sector> {
        return this.http.post<{ data: Sector }>(this.baseUrl, data)
            .pipe(map(response => response.data))
    }

    update(id: number, data: Sector) {
        return this.http.put<{ data: Sector }>(`${this.baseUrl}/${id}`, data)
            .pipe(map(response => response.data))
    }

    destroy(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`)
    }
}
