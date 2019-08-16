import { NgModule } from '@angular/core';
import { ExchangeCreateComponent } from './exchange-create/exchange-create';
import { ExchangeListCadastradaComponent } from './exchange-list-cadastrada/exchange-list-cadastrada';
import { ExchangeListConfirmedComponent } from './exchange-list-confirmed/exchange-list-confirmed';

@NgModule({
	declarations: [ExchangeCreateComponent],
	imports: [],
	exports: [ExchangeCreateComponent]
})
export class ComponentsModule {}
