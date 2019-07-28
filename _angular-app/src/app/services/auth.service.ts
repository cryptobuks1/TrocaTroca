import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {tap} from "rxjs/operators";
import {JwtHelperService} from "@auth0/angular-jwt";
import {UserLogado} from "../model";

const TOKEN_KEY = 'gestao_de_trocas';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    me: UserLogado = null;

    constructor(private http: HttpClient) {
        const token = this.getToken();
        this.setUserFromToken(token);
    }

    login(user: { key: string, password: string }): Observable<{ token: string }> {
        return this.http.post<{ token: string }>(`${environment.api.url}/login`, user)
            .pipe(tap(response => {
                this.setToken(response.token);
            }));
    }

    setToken(token: string) {
        this.setUserFromToken(token);
        window.localStorage.setItem(TOKEN_KEY, token);
    }

    getToken(): string | null {
        return window.localStorage.getItem(TOKEN_KEY);
    }

    isAuth() : boolean {
        const token = this.getToken();
        return !new JwtHelperService().isTokenExpired(token, 60);
    }

    logout() : Observable<any> {
        return this.http.post(`${environment.api.url}/logout`, {})
            .pipe(
                tap(() => {
                    this.setToken(null);
                })
            );
    }

    private setUserFromToken(token: string) {
        const decodedToken = new JwtHelperService().decodeToken(token);
        this.me = decodedToken ? {
            id: decodedToken.sub,
            key: decodedToken.key,
            email: decodedToken.emai,
        } : null;
    }
}
