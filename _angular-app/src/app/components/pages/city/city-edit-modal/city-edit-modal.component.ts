import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpErrorResponse} from "@angular/common/http";
import {CityHttpService} from "../../../../services/http/city-http.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import fieldsOptions from "../../city/city-form/city-fields-options";

@Component({
    selector: 'city-edit-modal',
    templateUrl: './city-edit-modal.component.html',
    styleUrls: ['./city-edit-modal.component.css']
})
export class CityEditModalComponent implements OnInit {

    _cityId: number;

    form: FormGroup;

    @ViewChild(ModalComponent)
    modal: ModalComponent;

    @Output()
    onSuccess: EventEmitter<any> = new EventEmitter<any>();
    @Output()
    onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

    constructor(
        public cityHttp: CityHttpService,
        private formBuilder: FormBuilder
    ) {
        const maxlength = fieldsOptions.city_name.validationMessage.maxlength;
        this.form = this.formBuilder.group({
            city_name: ['', [Validators.required, Validators.maxLength(maxlength)]],
            state_id: true
        });
    }

    ngOnInit() {
    }

    @Input()
    set cityId(value) {
        this._cityId = value;
        if (this._cityId) {
            this.cityHttp.get(this._cityId)
                .subscribe((city) => this.form.patchValue(city),
                    responseError => {
                        if (responseError.status === 401) {
                            this.modal.hide();
                        }
                    });
        }
    }

    submit() {
        this.cityHttp.update(this._cityId, this.form.value)
            .subscribe((city) => {
                this.onSuccess.emit(city);
                this.modal.hide();
            }, error => this.onError.emit(error));
    }

    showModal() {
        this.modal.show();
    }

    hideModal($event: Event) {
        console.log($event);
    }

    get fieldsOptions(): any {
        return fieldsOptions;
    }

}
