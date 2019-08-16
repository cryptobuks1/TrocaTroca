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
import {ExchangeSearchbarComponent} from "../components/exchange-searchbar/exchange-searchbar";
import { ExchangeSearchProvider } from '../providers/exchange-search/exchange-search';
import { StatusProvider } from '../providers/status/status';
import {ExchangeSearchOptionsComponent} from "../components/exchange-search-options/exchange-search-options";
import {ExchangeDetailPage} from "../pages/exchange-detail/exchange-detail";
import {ExchangeListCadastradaComponent} from "../components/exchange-list-cadastrada/exchange-list-cadastrada";
import {ExchangeConfirmDetailPage} from "../pages/exchange-confirm-detail/exchange-confirm-detail";
import {ExchangeListConfirmedComponent} from "../components/exchange-list-confirmed/exchange-list-confirmed";
import {ExchangeAuthorizeDetailPage} from "../pages/exchange-authorize-detail/exchange-authorize-detail";


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
    ExchangeDetailPage,
    ExchangeConfirmDetailPage,
    ExchangeAuthorizeDetailPage,
    ExchangeListComponent,
    MoreOptionsComponent,
    ExchangeSearchbarComponent,
    ExchangeSearchOptionsComponent,
    ExchangeListCadastradaComponent,
    ExchangeListConfirmedComponent,
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
    ExchangeDetailPage,
    ExchangeConfirmDetailPage,
    ExchangeAuthorizeDetailPage,
    ExchangeListComponent,
    MoreOptionsComponent,
    ExchangeSearchbarComponent,
    ExchangeSearchOptionsComponent,
    ExchangeListCadastradaComponent,
    ExchangeListConfirmedComponent,
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
    RedirectIfNotAuthProvider,
    ExchangeSearchProvider,
    StatusProvider
  ]
})
export class AppModule {}
