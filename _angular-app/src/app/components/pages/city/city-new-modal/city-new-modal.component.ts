import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {CityHttpService} from "../../../../services/http/city-http.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import fieldsOptions from "../../city/city-form/city-fields-options";

@Component({
    selector: 'city-new-modal',
    templateUrl: './city-new-modal.component.html',
    styleUrls: ['./city-new-modal.component.css']
})
export class CityNewModalComponent implements OnInit {

    form: FormGroup;
    errors = {};

    @ViewChild(ModalComponent)
    modal: ModalComponent;

    @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
    @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

    constructor(
        public cityHttp: CityHttpService,
        private formBuilder: FormBuilder
    ) {
        const maxlength = fieldsOptions.city_name.validationMessage.maxlength;
        this.form = this.formBuilder.group({
            city_name: ['', [Validators.required, Validators.maxLength(maxlength)]],
            state_id: null
        });
    }

    ngOnInit() {
    }

    submit() {
        this.cityHttp.create(this.form.value)
            .subscribe((city) => {
                console.log(city);
                this.form.reset({
                    city_name: '',
                    state_id: null
                });
                this.onSuccess.emit(city);
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
