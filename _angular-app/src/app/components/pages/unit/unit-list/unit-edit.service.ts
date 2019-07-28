import { Injectable } from '@angular/core';
import {NotifyMessageService} from "../../../../services/notify-message.service";
import {HttpErrorResponse} from "@angular/common/http";
import {UnitListComponent} from "./unit-list.component";

@Injectable({
  providedIn: 'root'
})
export class UnitEditService {

    private _unitListComponent: UnitListComponent;

    constructor(private notifyMessage: NotifyMessageService) {
    }

    set unitListComponent(value: UnitListComponent) {
        this._unitListComponent = value;
    }

    showModalEdit(unitId: number) {
        this._unitListComponent.unitId = unitId;
        this._unitListComponent.unitEditModal.showModal();
    }

    onEditSuccess($event: any) {
        this.notifyMessage.success('Unidade atualizada com sucesso!');
        console.log($event);
        this._unitListComponent.getUnits();
    }

    onEditError($event: HttpErrorResponse) {
        console.log($event);
        this.notifyMessage.error('Não foi possível atualizar a unidade.');
    }
}
