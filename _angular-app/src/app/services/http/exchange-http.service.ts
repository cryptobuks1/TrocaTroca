import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {SearchParams, SearchParamsBuilder} from "./http-resource";
import {Observable} from "rxjs";
import {
    Exchange,
    ExchangeAuthorize,
    ExchangeCancel,
    ExchangeConclusion,
    ExchangeConfirm,
    ExchangeDecline, ExchangePending
} from "../../model";
import {map} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class ExchangeHttpService {

    private baseUrl = `${environment.api.url}/exchanges`;

    constructor(
        private http: HttpClient
    ) {
    }

    list(searchParams: SearchParams): Observable<{ data: Array<Exchange>; meta: any }> {
        const params = new HttpParams({
            fromObject: new SearchParamsBuilder(searchParams).makeObject()
        });
        return this.http.get<{ data: Array<Exchange>, meta }>(this.baseUrl, {
            params,
        });
    }

    listCadastradas(searchParams: SearchParams): Observable<{ data: Array<Exchange>; meta: any }> {
        const params = new HttpParams({
            fromObject: new SearchParamsBuilder(searchParams).makeObject()
        });
        return this.http.get<{ data: Array<Exchange>, meta }>(`${this.baseUrl}/cadastradas`, {
            params,
        });
    }

    listConfirm(searchParams: SearchParams): Observable<{ data: Array<Exchange>; meta: any }> {
        const params = new HttpParams({
            fromObject: new SearchParamsBuilder(searchParams).makeObject()
        });
        return this.http.get<{ data: Array<Exchange>, meta }>(`${this.baseUrl}/confirm`, {
            params,
        });
    }

    listAuthorize(searchParams: SearchParams): Observable<{ data: Array<Exchange>; meta: any }> {
        const params = new HttpParams({
            fromObject: new SearchParamsBuilder(searchParams).makeObject()
        });
        return this.http.get<{ data: Array<Exchange>, meta }>(`${this.baseUrl}/authorize`, {
            params,
        });
    }

    get(id: number): Observable<Exchange> {
        return this.http.get<{ data: Exchange }>(`${this.baseUrl}/${id}`)
            .pipe(map(response => response.data));
    }

    getAuthorize(id: number): Observable<ExchangeAuthorize> {
        return this.http.get<{ data: ExchangeAuthorize }>(`${this.baseUrl}/${id}`)
            .pipe(map(response => response.data));
    }

    getCancel(id: number): Observable<ExchangeCancel> {
        return this.http.get<{ data: ExchangeCancel }>(`${this.baseUrl}/${id}`)
            .pipe(map(response => response.data));
    }

    getConfirm(id: number): Observable<ExchangeConfirm> {
        return this.http.get<{ data: ExchangeConfirm }>(`${this.baseUrl}/${id}`)
            .pipe(map(response => response.data));
    }

    getDecline(id: number): Observable<ExchangeDecline> {
        return this.http.get<{ data: ExchangeDecline }>(`${this.baseUrl}/${id}`)
            .pipe(map(response => response.data));
    }

    getConclusion(id: number): Observable<ExchangeConclusion> {
        return this.http.get<{ data: ExchangeConclusion }>(`${this.baseUrl}/${id}`)
            .pipe(map(response => response.data));
    }

    getPending(id: number): Observable<ExchangePending> {
        return this.http.get<{ data: ExchangePending }>(`${this.baseUrl}/${id}`)
            .pipe(map(response => response.data));
    }

    create(data: Exchange): Observable<Exchange> {
        return this.http.post<{ data: Exchange }>(this.baseUrl, data, {})
            .pipe(map(response => response.data))
    }

    updateConfirm(id: number, data: ExchangeConfirm): Observable<ExchangeConfirm> {
        return this.http.patch<{ data: ExchangeConfirm }>(`${this.baseUrl}/${id}`, data)
            .pipe(map(response => response.data))
    }

    updateDecline(id: number, data: ExchangeDecline): Observable<ExchangeDecline> {
        return this.http.patch<{ data: ExchangeDecline }>(`${this.baseUrl}/${id}`, data)
            .pipe(map(response => response.data))
    }

    updateConclusion(id: number, data: ExchangeConclusion): Observable<ExchangeConclusion> {
        return this.http.patch<{ data: ExchangeConclusion }>(`${this.baseUrl}/${id}`, data)
            .pipe(map(response => response.data))
    }

    updateCancel(id: number, data: ExchangeCancel): Observable<ExchangeCancel> {
        return this.http.patch<{ data: ExchangeCancel }>(`${this.baseUrl}/${id}`, data)
            .pipe(map(response => response.data))
    }

    updateAutorize(id: number, data: ExchangeAuthorize): Observable<ExchangeAuthorize> {
        return this.http.patch<{ data: ExchangeAuthorize }>(`${this.baseUrl}/${id}`, data)
            .pipe(map(response => response.data))
    }

    updatePending(id: number, data: ExchangePending): Observable<ExchangePending> {
        return this.http.patch<{ data: ExchangePending }>(`${this.baseUrl}/${id}`, data)
            .pipe(map(response => response.data))
    }
}
