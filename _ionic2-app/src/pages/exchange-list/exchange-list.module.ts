import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExchangeListPage } from './exchange-list';

@NgModule({
  declarations: [
    ExchangeListPage,
  ],
  imports: [
    IonicPageModule.forChild(ExchangeListPage),
  ],
  exports: [ExchangeListPage]
})
export class ExchangeListPageModule {}
