import { Injectable } from '@angular/core';
import {ExchangeListComponent} from "./exchange-list.component";
import {NotifyMessageService} from "../../../../services/notify-message.service";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ExchangeInsertService {

    private _exchangeListComponent: ExchangeListComponent;

    constructor(
        private notifyMessage: NotifyMessageService
    ) {
    }

    set exchangeListComponent(value: ExchangeListComponent) {
        this._exchangeListComponent = value;
    }

    showModalInsert() {
        this._exchangeListComponent.exchangeNewModal.showModal();
    }

    onInsertSuccess($event: any) {
        this.notifyMessage.success('Troca Cadastrada com sucesso!.');
        console.log($event);
        this._exchangeListComponent.getExchanges();
    }

    onInsertError($event: HttpErrorResponse) {
        console.log($event);
        this.notifyMessage.error('Não foi possível cadastrar a troca!.');
    }
}
