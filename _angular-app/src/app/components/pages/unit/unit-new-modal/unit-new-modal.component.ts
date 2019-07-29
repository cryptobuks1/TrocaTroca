import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpErrorResponse} from "@angular/common/http";
import {UnitHttpService} from "../../../../services/http/unit-http.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import fieldsOptions from "../../unit/unit-form/unit-fields-options";

@Component({
  selector: 'unit-new-modal',
  templateUrl: './unit-new-modal.component.html',
  styleUrls: ['./unit-new-modal.component.css']
})
export class UnitNewModalComponent implements OnInit {

    form: FormGroup;
    errors = {};

    @ViewChild(ModalComponent)
    modal: ModalComponent;

    @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
    @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

    constructor(
        public unitHttp: UnitHttpService,
        private formBuilder: FormBuilder
    ) {
        const maxlength = fieldsOptions.unit_name.validationMessage.maxlength;
        this.form = this.formBuilder.group({
            unit_name: ['', [Validators.required, Validators.maxLength(maxlength)]],
            city_id: null
        });
    }

    ngOnInit() {
    }

    submit() {
        this.unitHttp.create(this.form.value)
            .subscribe((unit) => {
                console.log(unit);
                this.form.reset({
                    unit_name: '',
                    city_id: null
                });
                this.onSuccess.emit(unit);
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
