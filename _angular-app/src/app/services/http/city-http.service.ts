import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {City} from "../../model";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class CityHttpService {

    private baseUrl = 'http://localhost:8000/api/cities';

    constructor(private http: HttpClient) {
    }

    list(page: number): Observable<{ data: Array<City>, meta: any }> {
        const token = window.localStorage.getItem('token');
        const params = new HttpParams({
            fromObject: {
                page: page + ""
            }
        });
        return this.http.get<{ data: Array<City>, meta }>(this.baseUrl, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }

    get(id: number): Observable<City> {
        const token = window.localStorage.getItem('token');
        return this.http.get<{ data: City }>(`this.baseUrl/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .pipe(map(response => response.data))
    }

    create(data: City): Observable<City> {
        const token = window.localStorage.getItem('token');
        return this.http.post<{ data: City }>(this.baseUrl, data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .pipe(map(response => response.data))
    }

    update(id: number, data: City) {
        const token = window.localStorage.getItem('token');
        return this.http.put<{ data: City }>(`${this.baseUrl}/${id}`, data, {
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
