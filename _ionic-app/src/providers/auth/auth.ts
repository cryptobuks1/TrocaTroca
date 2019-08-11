import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {FirebaseAuthProvider} from "./firebase-auth";
import {Observable} from "rxjs";
import {fromPromise} from "rxjs/observable/fromPromise";
import {flatMap, tap} from "rxjs/operators";
import {User} from "../../app/model";
import {JwtHelperService} from "@auth0/angular-jwt";
import {environment} from "@app/env";
import {forkJoin} from "rxjs/observable/forkJoin";

declare const cordova;
const TOKEN_KEY = 'troca_troca_token';

/*
  Generated class for the AuthProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

    me: User = null;

    constructor(
        public http: HttpClient,
        private firebaseAuth: FirebaseAuthProvider
    ) {
        const token = this.getToken();
        this.setUserFromToken(token);
    }

    login() : Observable<{token: string}> {
        return fromPromise(this.firebaseAuth.getToken())
            .pipe(
                flatMap(token => {
                    return this.http.post<{token: string}>('http://localhost:8000/api/login_vendor', {token})
                        .pipe(
                            tap(data => this.setToken(data.token))
                        );
                })
            );
    }

    setToken(token: string) {
        this.setUserFromToken(token);
        token ? window.localStorage.setItem(TOKEN_KEY, token) : window.localStorage.removeItem(TOKEN_KEY);
    }

    getToken(): string | null {
        return window.localStorage.getItem(TOKEN_KEY);
    }

    private setUserFromToken(token: string) {
        const decodedToken = new JwtHelperService().decodeToken(token);
        this.me = decodedToken ? {
            id: decodedToken.sub,
            name: decodedToken.name,
            email: decodedToken.email,
            profile: decodedToken.profile
        } : null;
    }

    async isFullAuth(): Promise<boolean>{
        return Promise.all([this.isAuth(), this.firebaseAuth.isAuth()])
            .then(values => values[0] && values[1]);
    }

    async isAuth(): Promise<boolean> {
        const token = this.getToken();
        if(!token){
            return false;
        }

        if(this.isTokenExpired(token)){
            try{
                await this.refresh().toPromise();
            }catch(e){
                console.log('erro ao fazer o refresh token', e);
                return false;
            }
        }

        return true;
    }

    isTokenExpired(token: string){
        return new JwtHelperService().isTokenExpired(token, 30);
    }

    refresh() : Observable<{token: string}> {
        console.log('refresh token');
        return this.http
            .post<{token: string}>(this.refreshUrl(), {})
            .pipe(
                tap(data => this.setToken(data.token))
            );

    }

    refreshUrl(){
        return `${environment.api.url}/refresh`;
    }

    logout(): Observable<any>{
        return forkJoin(
            this.firebaseAuth.firebase.auth().signOut(),
            cordova.plugins.firebase.auth.signOut(),
            this.http.post(`${environment.api.url}/logout`, {})
                .pipe(
                    tap(() => this.setToken(null))
                )
        )

    }

}
