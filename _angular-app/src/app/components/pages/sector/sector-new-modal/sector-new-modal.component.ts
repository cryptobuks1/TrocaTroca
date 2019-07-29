import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpErrorResponse} from "@angular/common/http";
import {Sector} from "../../../../model";
import {SectorHttpService} from "../../../../services/http/sector-http.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidationMessage} from "../../../../common/validation-message";
import fieldsOptions from "../sector-form/sector-fields-options";

@Component({
    selector: 'sector-new-modal',
    templateUrl: './sector-new-modal.component.html',
    styleUrls: ['./sector-new-modal.component.css']
})
export class SectorNewModalComponent implements OnInit {

    form: FormGroup;
    errors = {};

    @ViewChild(ModalComponent)
    modal: ModalComponent;

    @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
    @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

    constructor(
        public sectorHttp: SectorHttpService,
        private formBuilder: FormBuilder
    ) {
        const maxlength = fieldsOptions.sector_name.validationMessage.maxlength;
        this.form = this.formBuilder.group({
            sector_name: ['', [Validators.required, Validators.maxLength(maxlength)]],
        });
    }

    ngOnInit() {
    }

    submit() {
        this.sectorHttp.create(this.form.value)
            .subscribe((sector) => {
                console.log(sector);
                this.form.reset({
                    sector_name: ''
                });
                this.onSuccess.emit(sector);
                this.modal.hide();
            }, responseError => {
                if (responseError.status === 422) {
                    this.errors = responseError.error.errors;
                }
                this.onError.emit(responseError)
            });
    }

    showModal() {
        this.modal.show();
    }

    hideModal($event: Event) {
        console.log($event);
    }

    showErrors() {
        return Object.keys(this.errors).length != 0;
    }

}
