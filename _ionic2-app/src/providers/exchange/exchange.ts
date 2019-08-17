import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {
    Exchange,
    ExchangeAuthorize,
    ExchangeCancel,
    ExchangeConclusion,
    ExchangeConfirm,
    ExchangeDecline, ExchangePending
} from "../../app/model";
import {ExchangeSearchProvider} from "../exchange-search/exchange-search";
import {map} from "rxjs/operators";


/*
  Generated class for the ExchangeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ExchangeProvider {

    private baseUrl = `${environment.api.url}/exchanges`;

    constructor(
        private http: HttpClient,
        private exchangeSearch: ExchangeSearchProvider
    ) {
    }

    list(page: number): Observable<{ data: Array<Exchange>, meta: any }> {
        const fromObject = {
            page,
            'statuses[]': this.exchangeSearch.options.status,
            sort: this.exchangeSearch.options.orderBy == 'latest' ? '-date' : 'date',
            search: this.exchangeSearch.options.search
        };
        const params = new HttpParams({fromObject: (<any>fromObject)})
        return this.http.get<{ data: Array<Exchange>, meta: any }>(`${this.baseUrl}/all`, {params});
    }

    listCadastradas(page: number): Observable<{ data: Array<Exchange>; meta: any }> {
        const fromObject = {
            page,
            'statuses[]': this.exchangeSearch.options.status,
            sort: this.exchangeSearch.options.orderBy == 'latest' ? '-date' : 'date',
            search: this.exchangeSearch.options.search
        };
        const params = new HttpParams({fromObject: (<any>fromObject)})
        return this.http.get<{ data: Array<Exchange>, meta: any }>(`${this.baseUrl}/cadastradas`, {
            params,
        });
    }

    listConfirmadas(page: number): Observable<{ data: Array<ExchangeConfirm>; meta: any }> {
        const fromObject = {
            page,
            'statuses[]': this.exchangeSearch.options.status,
            sort: this.exchangeSearch.options.orderBy == 'latest' ? '-date' : 'date',
            search: this.exchangeSearch.options.search
        };
        const params = new HttpParams({fromObject: (<any>fromObject)})
        return this.http.get<{ data: Array<ExchangeConfirm>, meta: any }>(`${this.baseUrl}/confirm`, {
            params,
        });
    }

    listAutorizadas(page: number): Observable<{ data: Array<ExchangeAuthorize>; meta: any }> {
        const fromObject = {
            page,
            'statuses[]': this.exchangeSearch.options.status,
            sort: this.exchangeSearch.options.orderBy == 'latest' ? '-date' : 'date',
            search: this.exchangeSearch.options.search
        };
        const params = new HttpParams({fromObject: (<any>fromObject)});
        return this.http.get<{ data: Array<ExchangeAuthorize>, meta: any }>(`${this.baseUrl}/authorize`, {
            params,
        });
    }

    get(id: number): Observable<{ exchange: Exchange}> {
        return this.http.get<{ data: any } >(`${this.baseUrl}/${id}`)
            .pipe(map(response => response.data));
    }

    getCadastradas(id: number): Observable<{ exchangeCadastrada: Exchange}> {
        return this.http.get<{ data: any } >(`${this.baseUrl}/${id}`)
            .pipe(map(response => response.data));
    }

    getConfirmadas(id: number): Observable<{ exchangeConfirmada: ExchangeConfirm}> {
        return this.http.get<{ data: any } >(`${this.baseUrl}/${id}`)
            .pipe(map(response => response.data));
    }

    getAutorizadas(id: number): Observable<{ exchangeAutorizada: ExchangeAuthorize}> {
        return this.http.get<{ data: any } >(`${this.baseUrl}/${id}`)
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
