import {Injectable} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {NotifyMessageService} from "../../../../services/notify-message.service";
import {CityListComponent} from "./city-list.component";

@Injectable({
    providedIn: 'root'
})
export class CityDeleteService {

    private _cityListComponent: CityListComponent;

    constructor(private notifyMessage: NotifyMessageService) {
    }

    set cityListComponent(value: CityListComponent) {
        this._cityListComponent = value;
    }

    showModalDelete(cityId: number) {
        this._cityListComponent.cityId = cityId;
        this._cityListComponent.cityDeleteModal.showModal();
    }

    onDeleteSuccess($event: any) {
        this.notifyMessage.success('Cidade removida com sucesso!');
        console.log($event);
        this._cityListComponent.getCities();
    }

    onDeleteError($event: HttpErrorResponse) {
        console.log($event);
        this.notifyMessage.error('Não foi possível excluir a cidade. Verifique se a mesma não está relacionada com alguma unidade.');
    }
}
