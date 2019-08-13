import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AuthProvider} from "../auth/auth";
import {App} from "ionic-angular";
import {LoginPage} from "../../pages/login/login";

/*
  Generated class for the RedirectIfNotAuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RedirectIfNotAuthProvider {

    constructor(private auth: AuthProvider,
                private app: App) {
        console.log('Hello RedirectIfNotAuthProvider Provider');
    }

    ionViewCanEnter(): Promise<boolean> {
        return this.auth.isAuth()
            .then((isAuth) => {
                if(!isAuth){
                    setTimeout(() => {
                        this.app.getRootNav().setRoot(LoginPage);
                    })
                }
                return isAuth;
            })
    }



}
