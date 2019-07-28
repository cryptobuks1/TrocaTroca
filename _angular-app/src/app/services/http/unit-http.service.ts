import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Unit} from "../../model";

@Injectable({
  providedIn: 'root'
})
export class UnitHttpService {

    private baseUrl = 'http://localhost:8000/api/units';

    constructor(private http: HttpClient) {
    }

    list(page: number): Observable<{ data: Array<Unit>, meta: any }> {
        const token = window.localStorage.getItem('token');
        const params = new HttpParams({
            fromObject: {
                page: page + ""
            }
        });
        return this.http.get<{ data: Array<Unit>, meta }>(this.baseUrl, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }

    get(id: number): Observable<Unit> {
        const token = window.localStorage.getItem('token');
        return this.http.get<{ data: Unit }>(`${this.baseUrl}/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .pipe(map(response => response.data))
    }

    create(data: Unit): Observable<Unit> {
        const token = window.localStorage.getItem('token');
        return this.http.post<{ data: Unit }>(this.baseUrl, data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .pipe(map(response => response.data))
    }

    update(id: number, data: Unit) {
        const token = window.localStorage.getItem('token');
        return this.http.put<{ data: Unit }>(`${this.baseUrl}/${id}`, data, {
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
