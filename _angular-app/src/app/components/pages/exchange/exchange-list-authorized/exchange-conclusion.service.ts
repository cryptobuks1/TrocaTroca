import { Injectable } from '@angular/core';
import {NotifyMessageService} from "../../../../services/notify-message.service";
import {HttpErrorResponse} from "@angular/common/http";
import {ExchangeListAuthorizedComponent} from "./exchange-list-authorized.component";

@Injectable({
  providedIn: 'root'
})
export class ExchangeConclusionService {

    private _exchangeListAuthorizedComponent: ExchangeListAuthorizedComponent;

    constructor(
        private notifyMessage: NotifyMessageService
    ) {
    }

    set exchangeListAuthorizedComponent(value: ExchangeListAuthorizedComponent) {
        this._exchangeListAuthorizedComponent = value;
    }

    showModalConclusion(exchangeId: number) {
        this._exchangeListAuthorizedComponent.exchangeId = exchangeId;
        this._exchangeListAuthorizedComponent.exchangeConclusionModal.showModal();
    }

    onConclusionSuccess($event: any) {
        this.notifyMessage.success('Troca concluída com sucesso!.');
        console.log($event);
        this._exchangeListAuthorizedComponent.getExchangesAuthorize();
    }

    onConclusionError($event: HttpErrorResponse) {
        console.log($event);
        this.notifyMessage.error('Não foi possível concluir a troca!.');
    }
}
