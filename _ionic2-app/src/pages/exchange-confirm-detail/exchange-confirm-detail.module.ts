import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExchangeConfirmDetailPage } from './exchange-confirm-detail';

@NgModule({
  declarations: [
    ExchangeConfirmDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ExchangeConfirmDetailPage),
  ],
})
export class ExchangeConfirmDetailPageModule {}
