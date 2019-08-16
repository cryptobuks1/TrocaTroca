import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Exchange, ExchangeAuthorize, ExchangeConfirm} from "../../app/model";
import {ExchangeSearchProvider} from "../exchange-search/exchange-search";
import {map} from "rxjs/operators";
import {SearchParams, SearchParamsBuilder} from "../../../../_angular-app/src/app/services/http/http-resource";

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
        const params = new HttpParams({fromObject: (<any>fromObject)})
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

}
