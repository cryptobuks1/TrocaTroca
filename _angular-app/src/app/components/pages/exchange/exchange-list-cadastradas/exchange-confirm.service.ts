import { Injectable } from '@angular/core';
import {NotifyMessageService} from "../../../../services/notify-message.service";
import {HttpErrorResponse} from "@angular/common/http";
import {ExchangeListCadastradasComponent} from "./exchange-list-cadastradas.component";

@Injectable({
  providedIn: 'root'
})
export class ExchangeConfirmService {

    private _exchangeListCadastradasComponent: ExchangeListCadastradasComponent;

    constructor(
        private notifyMessage: NotifyMessageService
    ) {
    }

    set exchangeListCadastradasComponent(value: ExchangeListCadastradasComponent) {
        this._exchangeListCadastradasComponent = value;
    }

    showModalConfirm(exchangeId: number) {
        this._exchangeListCadastradasComponent.exchangeId = exchangeId;
        this._exchangeListCadastradasComponent.exchangeConfirmModal.showModal();
    }

    onConfirmSuccess($event: any) {
        this.notifyMessage.success('Troca confirmada com sucesso!.');
        console.log($event);
        this._exchangeListCadastradasComponent.getExchangesCadastradas();
    }

    onConfirmError($event: HttpErrorResponse) {
        console.log($event);
        this.notifyMessage.error('Não foi possível confirmar a troca!.');
    }
}
