import { Injectable } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {NotifyMessageService} from "../../../../services/notify-message.service";
import {ExchangeListConfirmedComponent} from "./exchange-list-confirmed.component";

@Injectable({
  providedIn: 'root'
})
export class ExchangeCancelService {

    private _exchangeListConfirmedComponent: ExchangeListConfirmedComponent;

    constructor(
        private notifyMessage: NotifyMessageService
    ) {
    }

    set exchangeListConfirmedComponent(value: ExchangeListConfirmedComponent) {
        this._exchangeListConfirmedComponent = value;
    }

    showModalCancel(exchangeId: number) {
        this._exchangeListConfirmedComponent.exchangeId = exchangeId;
        this._exchangeListConfirmedComponent.exchangeCancelModal.showModal();
    }

    onCancelSuccess($event: any) {
        this.notifyMessage.success('Troca cancelada com sucesso!.');
        console.log($event);
        this._exchangeListConfirmedComponent.getExchangesConfirmed();
    }

    onCancelError($event: HttpErrorResponse) {
        console.log($event);
        this.notifyMessage.error('Não foi possível cancelar a troca!.');
    }
}
