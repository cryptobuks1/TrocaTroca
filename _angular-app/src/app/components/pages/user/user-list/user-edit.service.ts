import { Injectable } from '@angular/core';
import {UserListComponent} from "./user-list.component";
import {NotifyMessageService} from "../../../../services/notify-message.service";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserEditService {

    private _userListComponent: UserListComponent;

    constructor(
        private notifyMessage: NotifyMessageService
    ) {
    }

    set userListComponent(value: UserListComponent) {
        this._userListComponent = value;
    }

    showModalEdit(userId: number) {
        this._userListComponent.userId = userId;
        this._userListComponent.userEditModal.showModal();
    }

    onEditSuccess($event: any) {
        this.notifyMessage.success('Usuário atualizado com sucesso!.');
        console.log($event);
        this._userListComponent.getUsers();
    }

    onEditError($event: HttpErrorResponse) {
        this.notifyMessage.error('Não foi possível atualizar o usuário!.');
        console.log($event);
    }
}
