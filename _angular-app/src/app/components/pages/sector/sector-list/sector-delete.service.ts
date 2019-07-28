import { Injectable } from '@angular/core';
import {NotifyMessageService} from "../../../../services/notify-message.service";
import {HttpErrorResponse} from "@angular/common/http";
import {SectorListComponent} from "./sector-list.component";

@Injectable({
  providedIn: 'root'
})
export class SectorDeleteService {

    private _sectorListComponent: SectorListComponent;

    constructor(private notifyMessage: NotifyMessageService) {
    }

    set sectorListComponent(value: SectorListComponent) {
        this._sectorListComponent = value;
    }

    showModalDelete(sectorId: number) {
        this._sectorListComponent.sectorId = sectorId;
        this._sectorListComponent.sectorDeleteModal.showModal();
    }

    onDeleteSuccess($event: any) {
        this.notifyMessage.success('Setor removido com sucesso!');
        console.log($event);
        this._sectorListComponent.getSectors();
    }

    onDeleteError($event: HttpErrorResponse) {
        console.log($event);
        this.notifyMessage.error('Não foi possível excluir o setor. Verifique se o mesmo não está relacionado com alguma unidade.');
    }
}
