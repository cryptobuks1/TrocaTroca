import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExchangeDetailPage } from './exchange-detail';

@NgModule({
  declarations: [
    ExchangeDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ExchangeDetailPage),
  ],
})
export class ExchangeDetailPageModule {}
