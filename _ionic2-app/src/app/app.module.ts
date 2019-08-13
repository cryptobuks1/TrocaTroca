import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";
import { AuthProvider } from '../providers/auth/auth';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ExchangeListPage} from "../pages/exchange-list/exchange-list";
import { ExchangeProvider } from '../providers/exchange/exchange';
import {JWT_OPTIONS, JwtModule} from "@auth0/angular-jwt";
import {RefreshTokenInterceptor} from "../providers/auth/refresh-token-interceptor";
import {RedirectIfNotAuthProvider} from "../providers/auth/redirect-if-not-auth";
import {SuperTabsModule} from "ionic2-super-tabs";
import {MainPage} from "../pages/main/main";
import {ExchangeListComponent} from "../components/exchange-list/exchange-list";
import {MoreOptionsComponent} from "../components/more-options/more-options";


function jwtFactory(authService: AuthProvider) {
    return {
      whitelistedDomains: [
          new RegExp('localhost:8000/*')
      ],
        tokenGetter: () => {
          return authService.getToken();
        }
    }
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    MainPage,
    ExchangeListComponent,
    MoreOptionsComponent,
    ExchangeListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    SuperTabsModule.forRoot(),
    JwtModule.forRoot({
        jwtOptionsProvider: {
          provide: JWT_OPTIONS,
          useFactory: jwtFactory,
          deps: [AuthProvider]
        }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    MainPage,
    ExchangeListComponent,
    MoreOptionsComponent,
    ExchangeListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    ExchangeProvider,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RefreshTokenInterceptor,
      multi: true
    },
    RedirectIfNotAuthProvider
  ]
})
export class AppModule {}
