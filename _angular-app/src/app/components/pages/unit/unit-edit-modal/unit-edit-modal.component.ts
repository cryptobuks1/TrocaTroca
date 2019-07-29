import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpErrorResponse} from "@angular/common/http";
import {UnitHttpService} from "../../../../services/http/unit-http.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import fieldsOptions from "../../unit/unit-form/unit-fields-options";

@Component({
  selector: 'unit-edit-modal',
  templateUrl: './unit-edit-modal.component.html',
  styleUrls: ['./unit-edit-modal.component.css']
})
export class UnitEditModalComponent implements OnInit {

    _unitId: number;

    form: FormGroup;

    @ViewChild(ModalComponent)
    modal: ModalComponent;

    @Output()
    onSuccess: EventEmitter<any> = new EventEmitter<any>();
    @Output()
    onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

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

    @Input()
    set unitId(value) {
        this._unitId = value;
        if (this._unitId) {
            this.unitHttp.get(this._unitId)
                .subscribe(unit => this.form.patchValue(unit),
                    responseError => {
                        if (responseError.status === 401) {
                            this.modal.hide();
                        }
                    });
        }
    }

    submit() {
        this.unitHttp.update(this._unitId, this.form.value)
            .subscribe((unit) => {
                this.onSuccess.emit(unit);
                this.modal.hide();
            }, error => this.onError.emit(error));
    }

    showModal() {
        this.modal.show();
    }

    hideModal($event: Event) {
        console.log($event);
    }

}
