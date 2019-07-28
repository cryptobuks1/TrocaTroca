import { Injectable } from '@angular/core';
import {NotifyMessageService} from "../../../../services/notify-message.service";
import {HttpErrorResponse} from "@angular/common/http";
import {UnitListComponent} from "./unit-list.component";

@Injectable({
  providedIn: 'root'
})
export class UnitInsertService {

    private _unitListComponent: UnitListComponent;

    constructor(private notifyMessage: NotifyMessageService) {
    }

    set unitListComponent(value: UnitListComponent) {
        this._unitListComponent = value;
    }

    showModalInsert() {
        this._unitListComponent.unitNewModal.showModal();
    }

    onInsertSuccess($event: any) {
        this.notifyMessage.success('Unidade cadastrada com sucesso!');
        console.log($event);
        this._unitListComponent.getUnits();
    }

    onInsertError($event: HttpErrorResponse) {
        console.log($event);
        this.notifyMessage.error('Não foi possível cadastrar a unidade.');
    }
}
