import { Injectable } from '@angular/core';
import {NotifyMessageService} from "../../../../services/notify-message.service";
import {HttpErrorResponse} from "@angular/common/http";
import {SectorListComponent} from "./sector-list.component";

@Injectable({
  providedIn: 'root'
})
export class SectorInsertService {

    private _sectorListComponent: SectorListComponent;

    constructor(private notifyMessage: NotifyMessageService) {
    }

    set sectorListComponent(value: SectorListComponent) {
        this._sectorListComponent = value;
    }

    showModalInsert() {
        this._sectorListComponent.sectorNewModal.showModal();
    }

    onInsertSuccess($event: any) {
        this.notifyMessage.success('Setor cadastrado com sucesso!');
        console.log($event);
        this._sectorListComponent.getSectors();
    }

    onInsertError($event: HttpErrorResponse) {
        console.log($event);
        this.notifyMessage.error('Não foi possível cadastrar o setor.');
    }
}
