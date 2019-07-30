import { Injectable } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {NotifyMessageService} from "../../../../services/notify-message.service";
import {ExchangeListAuthorizedComponent} from "./exchange-list-authorized.component";

@Injectable({
  providedIn: 'root'
})
export class ExchangePendingService {

    private _exchangeListAuthorizedComponent: ExchangeListAuthorizedComponent;

    constructor(
        private notifyMessage: NotifyMessageService
    ) {
    }

    set exchangeListAuthorizedComponent(value: ExchangeListAuthorizedComponent) {
        this._exchangeListAuthorizedComponent = value;
    }

    showModalPending(exchangeId: number) {
        this._exchangeListAuthorizedComponent.exchangeId = exchangeId;
        this._exchangeListAuthorizedComponent.exchangePendingModal.showModal();
    }

    onPendingSuccess($event: any) {
        this.notifyMessage.success('Troca ficou pendente com sucesso!.');
        console.log($event);
        this._exchangeListAuthorizedComponent.getExchangesAuthorize();
    }

    onPendingError($event: HttpErrorResponse) {
        console.log($event);
        this.notifyMessage.error('Não foi possível torar a troca pendente!.');
    }
}
