import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpErrorResponse} from "@angular/common/http";
import {UserHttpService} from "../../../../services/http/user-http.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import fieldsOptions from "../user-form/user-fields-options";

@Component({
  selector: 'user-edit-modal',
  templateUrl: './user-edit-modal.component.html',
  styleUrls: ['./user-edit-modal.component.css']
})
export class UserEditModalComponent implements OnInit {

    form: FormGroup;

    @Input()
    _userId: number;

    @ViewChild(ModalComponent)
    modal: ModalComponent;

    @Output()
    onSuccess: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

    constructor(
        private userHttp: UserHttpService,
        private formBuilder: FormBuilder
    ) {
        const maxlength = fieldsOptions.username.validationMessage.maxlength;
        const maxlength2 = fieldsOptions.password.validationMessage.maxlength;
        const minlength = fieldsOptions.password.validationMessage.minlength;
        this.form = this.formBuilder.group({
            username: ['', [Validators.required, Validators.maxLength(maxlength)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.maxLength(maxlength2), Validators.minLength(minlength)]],
            unit_id: null,
            sector_id: null
        });
    }

    ngOnInit() {
    }

    submit() {
        this.userHttp.update(this._userId, this.form.value)
            .subscribe((user) => {
                this.onSuccess.emit(user);
                this.modal.hide();
            }, error => this.onError.emit(error));
    }

    @Input()
    set userId(value) {
        this._userId = value;
        if (this._userId) {
            this.userHttp.get(this._userId)
                .subscribe((user) => this.form.patchValue(user),
                    responseError => {
                        if (responseError.status === 401) {
                            this.modal.hide();
                        }
                    });
        }

    }

    showModal() {
        this.modal.show();
    }

    hideModal($event: Event) {
        console.log($event);
    }

}
