import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Sector} from "../../model";
import {SearchParams, SearchParamsBuilder} from "./http-resource";

@Injectable({
    providedIn: 'root'
})
export class SectorHttpService {

    private baseUrl = 'http://localhost:8000/api/sectors';

    constructor(private http: HttpClient) {
    }

    list(searchParams: SearchParams): Observable<{ data: Array<Sector>, meta: any }> {
        const token = window.localStorage.getItem('token');
        const params = new HttpParams({
            fromObject: new SearchParamsBuilder(searchParams).makeObject()
        });
        return this.http.get<{ data: Array<Sector>, meta }>(this.baseUrl, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }

    get(id: number): Observable<Sector> {
        const token = window.localStorage.getItem('token');
        return this.http.get<{ data: Sector }>(`${this.baseUrl}/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .pipe(map(response => response.data))
    }

    create(data: Sector): Observable<Sector> {
        const token = window.localStorage.getItem('token');
        return this.http.post<{ data: Sector }>(this.baseUrl, data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .pipe(map(response => response.data))
    }

    update(id: number, data: Sector) {
        const token = window.localStorage.getItem('token');
        return this.http.put<{ data: Sector }>(`${this.baseUrl}/${id}`, data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .pipe(map(response => response.data))
    }

    destroy(id: number): Observable<any> {
        const token = window.localStorage.getItem('token');
        return this.http.delete(`${this.baseUrl}/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    }
}
