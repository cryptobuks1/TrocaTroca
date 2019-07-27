import {Injectable} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {CityListComponent} from "./city-list.component";
import {NotifyMessageService} from "../../../../services/notify-message.service";

@Injectable({
    providedIn: 'root'
})
export class CityInsertService {

    private _cityListComponent: CityListComponent;

    constructor(private notifyMessage: NotifyMessageService) {
    }

    set cityListComponent(value: CityListComponent) {
        this._cityListComponent = value;
    }

    showModalInsert() {
        this._cityListComponent.cityNewModal.showModal();
    }

    onInsertSuccess($event: any) {
        this.notifyMessage.success('Cidade cadastrada com sucesso!');
        console.log($event);
        this._cityListComponent.getCities();
    }

    onInsertError($event: HttpErrorResponse) {
        console.log($event);
        this.notifyMessage.error('Não foi possível cadastrar a cidade.');
    }
}
