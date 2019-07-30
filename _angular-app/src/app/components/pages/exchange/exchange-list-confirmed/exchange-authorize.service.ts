import { Injectable } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {NotifyMessageService} from "../../../../services/notify-message.service";
import {ExchangeListConfirmedComponent} from "./exchange-list-confirmed.component";

@Injectable({
  providedIn: 'root'
})
export class ExchangeAuthorizeService {

    private _exchangeListConfirmedComponent: ExchangeListConfirmedComponent;

    constructor(
        private notifyMessage: NotifyMessageService
    ) {
    }

    set exchangeListConfirmedComponent(value: ExchangeListConfirmedComponent) {
        this._exchangeListConfirmedComponent = value;
    }

    showModalAuthorize(exchangeId: number) {
        this._exchangeListConfirmedComponent.exchangeId = exchangeId;
        this._exchangeListConfirmedComponent.exchangeAuthorizeModal.showModal();
    }

    onAuthorizeSuccess($event: any) {
        this.notifyMessage.success('Troca autorizada com sucesso!.');
        console.log($event);
        this._exchangeListConfirmedComponent.getExchangesConfirmed();
    }

    onAuthorizeError($event: HttpErrorResponse) {
        console.log($event);
        this.notifyMessage.error('Não foi possível autorizar a troca!.');
    }
}
