import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AuthProvider} from "../../providers/auth/auth";
import {HomePage} from "../home/home";
import {ExchangeListPage} from "../exchange-list/exchange-list";
import {MainPage} from "../main/main";


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

    credentials = {
        key: '5XJP',
        password: 'secret'
    };

    showMessageError = false;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private authService: AuthProvider,
      ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

    submit() {
        this.authService.login(this.credentials)
            .subscribe((data) => {
                const token = data.token;
                window.localStorage.setItem('token', token);
                this.navCtrl.push(MainPage);
            }, error => this.showMessageError = true);
        return false;
    }
}
