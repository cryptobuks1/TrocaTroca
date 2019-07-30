import { Injectable } from '@angular/core';
import {NotifyMessageService} from "../../../../services/notify-message.service";
import {HttpErrorResponse} from "@angular/common/http";
import {ExchangeListCadastradasComponent} from "./exchange-list-cadastradas.component";

@Injectable({
  providedIn: 'root'
})
export class ExchangeDeclineService {

    private _exchangeListCadastradasComponent: ExchangeListCadastradasComponent;

    constructor(
        private notifyMessage: NotifyMessageService
    ) {
    }

    set exchangeListCadastradasComponent(value: ExchangeListCadastradasComponent) {
        this._exchangeListCadastradasComponent = value;
    }

    showModalDecline(exchangeId: number) {
        this._exchangeListCadastradasComponent.exchangeId = exchangeId;
        this._exchangeListCadastradasComponent.exchangeDeclineModal.showModal();
    }

    onDeclineSuccess($event: any) {
        this.notifyMessage.success('Troca rejeitada com sucesso!.');
        console.log($event);
        this._exchangeListCadastradasComponent.getExchangesCadastradas();
    }

    onDeclineError($event: HttpErrorResponse) {
        console.log($event);
        this.notifyMessage.error('Não foi possível rejeitar a troca!.');
    }
}
