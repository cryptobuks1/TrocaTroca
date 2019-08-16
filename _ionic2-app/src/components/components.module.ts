import { NgModule } from '@angular/core';
import { ExchangeCreateComponent } from './exchange-create/exchange-create';
import { ExchangeListCadastradaComponent } from './exchange-list-cadastrada/exchange-list-cadastrada';

@NgModule({
	declarations: [ExchangeCreateComponent],
	imports: [],
	exports: [ExchangeCreateComponent
    ]
})
export class ComponentsModule {}
