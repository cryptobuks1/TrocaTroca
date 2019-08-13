import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {UserLogado} from "../../app/model";
import {JwtHelperService} from "@auth0/angular-jwt";
import {environment} from "../../environments/environment";

const TOKEN_KEY = 'gestao_de_trocas';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

    me: UserLogado = null;

    constructor(public http: HttpClient) {
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

    async isAuth(): Promise<boolean> {
        const token = this.getToken();
        if (!token) {
            return false;
        }
        
        if (this.isTokenExpired(token)) {
            try {
                await this.refresh().toPromise();
            } catch (e) {
                console.log('erro ao fazer o refresh token', e);
                return false;
            }
        }
        return true;
    }

    logout(): Observable<any> {
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
            email: decodedToken.email,
            username: decodedToken.username,
            profile: decodedToken.profile
        } : null;
    }

    isTokenExpired(token: string) {
        return new JwtHelperService().isTokenExpired(token, 30);
    }

    refreshUrl() {
        return `${environment.api.url}/refresh`;
    }

    refresh(): Observable<{token: string}> {
        console.log('refresh token');
        return this.http.post<{token: string}>(this.refreshUrl(), {})
            .pipe(
                tap(data => this.setToken(data.token))
            );
    }
}
