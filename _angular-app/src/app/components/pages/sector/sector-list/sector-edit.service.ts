import { Injectable } from '@angular/core';
import {NotifyMessageService} from "../../../../services/notify-message.service";
import {HttpErrorResponse} from "@angular/common/http";
import {SectorListComponent} from "./sector-list.component";

@Injectable({
  providedIn: 'root'
})
export class SectorEditService {

    private _sectorListComponent: SectorListComponent;

    constructor(private notifyMessage: NotifyMessageService) {
    }

    set sectorListComponent(value: SectorListComponent) {
        this._sectorListComponent = value;
    }

    showModalEdit(sectorId: number) {
        this._sectorListComponent.sectorId = sectorId;
        this._sectorListComponent.sectorEditModal.showModal();
    }

    onEditSuccess($event: any) {
        this.notifyMessage.success('Setor atualizado com sucesso!');
        console.log($event);
        this._sectorListComponent.getSectors();
    }

    onEditError($event: HttpErrorResponse) {
        console.log($event);
        this.notifyMessage.error('Não foi possível atualizar o setor.');
    }
}
