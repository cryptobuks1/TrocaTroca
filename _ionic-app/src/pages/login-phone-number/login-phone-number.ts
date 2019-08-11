import { Component } from '@angular/core';
import {IonicPage, Loading, LoadingController, NavController, NavParams} from 'ionic-angular';
import {FirebaseAuthProvider} from "../../providers/auth/firebase-auth";
import {AuthProvider} from "../../providers/auth/auth";
import {MainPage} from "../main/main";
import {CustomerCreatePage} from "../customer-create/customer-create";

import {environment} from "@app/env";
import {HttpClient} from "@angular/common/http";

/**
 * Generated class for the LoginPhoneNumberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-phone-number',
  templateUrl: 'login-phone-number.html',
})
export class LoginPhoneNumberPage {

  showFirebaseUI = environment.showFirebaseUI;
  loader: Loading;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private firebaseAuth: FirebaseAuthProvider,
      private authService: AuthProvider,
      private loadingCtrl: LoadingController
  ) {
  }

  ionViewDidLoad() {
      const unsubscribed = this.firebaseAuth.firebase.auth().onAuthStateChanged((user) => {
          if (user) {
              this.loader = this.loadingCtrl.create({
                  content: 'Carregando..'
              });
              this.loader.present();
              this.handleAuthUser();
              unsubscribed();
          }
      });
      this.firebaseAuth.getToken().then((token) => {
          console.log(token), (error) => console.log(error);
      });

      if (environment.showFirebaseUI) {
          this.firebaseAuth.makePhoneNumberForm('#firebase-ui');
      }

      this.authService.login()
          .subscribe((token) => console.log(token));
  }

    redirectToMainPage() {
        this.navCtrl.setRoot(MainPage);
    }

    redirectToCustumerCreatePage() {
        this.navCtrl.push(CustomerCreatePage);
    }

    private handleAuthUser() {
        this.authService
            .login()
            .subscribe((token) => {
                this.loader.dismiss();
                this.redirectToMainPage();
            }, (responseError) => {
                this.loader.dismiss();
                if (environment.showFirebaseUI) {
                    this.firebaseAuth.makePhoneNumberForm("#firebase-ui")
                        .then(() => this.handleAuthUser());
                }

                this.redirectToCustumerCreatePage();
            });
    }

}
