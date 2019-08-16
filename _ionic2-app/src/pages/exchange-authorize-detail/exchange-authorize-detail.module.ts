import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExchangeAuthorizeDetailPage } from './exchange-authorize-detail';

@NgModule({
  declarations: [
    ExchangeAuthorizeDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ExchangeAuthorizeDetailPage),
  ],
})
export class ExchangeAuthorizeDetailPageModule {}
