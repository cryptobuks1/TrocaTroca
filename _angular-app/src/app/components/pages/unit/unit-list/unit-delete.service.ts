import { Injectable } from '@angular/core';
import {NotifyMessageService} from "../../../../services/notify-message.service";
import {HttpErrorResponse} from "@angular/common/http";
import {UnitListComponent} from "./unit-list.component";

@Injectable({
  providedIn: 'root'
})
export class UnitDeleteService {

    private _unitListComponent: UnitListComponent;

    constructor(private notifyMessage: NotifyMessageService) {
    }

    set unitListComponent(value: UnitListComponent) {
        this._unitListComponent = value;
    }

    showModalDelete(unitId: number) {
        this._unitListComponent.unitId = unitId;
        this._unitListComponent.unitDeleteModal.showModal();
    }

    onDeleteSuccess($event: any) {
        this.notifyMessage.success('Unidade removida com sucesso!');
        console.log($event);
        this._unitListComponent.getUnits();
    }

    onDeleteError($event: HttpErrorResponse) {
        console.log($event);
        this.notifyMessage.error('Não foi possível excluir a unidade. Verifique se a mesma não está relacionada com algum usuãrio ou alguma troca.');
    }
}
