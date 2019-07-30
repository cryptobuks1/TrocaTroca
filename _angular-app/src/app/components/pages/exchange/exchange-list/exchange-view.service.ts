import {EventEmitter, Injectable, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpErrorResponse} from "@angular/common/http";
import {ExchangeHttpService} from "../../../../services/http/exchange-http.service";
import {ExchangeListComponent} from "./exchange-list.component";
import {NotifyMessageService} from "../../../../services/notify-message.service";

@Injectable({
  providedIn: 'root'
})
export class ExchangeViewService {

    private _exchangeListComponent: ExchangeListComponent;

    constructor(
        private notifyMessage: NotifyMessageService
    ) {
    }

    set exchangeListComponent(value: ExchangeListComponent) {
        this._exchangeListComponent = value;
    }

    showModalView(exchangeId: number) {
        this._exchangeListComponent.exchangeId = exchangeId;
        this._exchangeListComponent.exchangeViewModal.showModal();
    }

    onViewError($event: HttpErrorResponse) {
        console.log($event);
        this.notifyMessage.error('Não foi possível conaultar a troca!.');
    }
}
