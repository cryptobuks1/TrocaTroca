import {Injectable} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {CityListComponent} from "./city-list.component";
import {NotifyMessageService} from "../../../../services/notify-message.service";

@Injectable({
    providedIn: 'root'
})
export class CityEditService {

    private _cityListComponent: CityListComponent;

    constructor(private notifyMessage: NotifyMessageService) {
    }

    set cityListComponent(value: CityListComponent) {
        this._cityListComponent = value;
    }

    showModalEdit(cityId: number) {
        this._cityListComponent.cityId = cityId;
        this._cityListComponent.cityEditModal.showModal();
    }

    onEditSuccess($event: any) {
        this.notifyMessage.success('Cidade atualizada com sucesso!');
        console.log($event);
        this._cityListComponent.getCities();
    }

    onEditError($event: HttpErrorResponse) {
        console.log($event);
        this.notifyMessage.error('Não foi possível atualizar a cidade.');
    }
}
