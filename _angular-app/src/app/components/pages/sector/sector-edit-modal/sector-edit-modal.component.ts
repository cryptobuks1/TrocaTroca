import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpErrorResponse} from "@angular/common/http";
import {Sector} from "../../../../model";
import {SectorHttpService} from "../../../../services/http/sector-http.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'sector-edit-modal',
  templateUrl: './sector-edit-modal.component.html',
  styleUrls: ['./sector-edit-modal.component.css']
})
export class SectorEditModalComponent implements OnInit {

    _sectorId: number;

    form: FormGroup;

    @ViewChild(ModalComponent)
    modal: ModalComponent;

    @Output()
    onSuccess: EventEmitter<any> = new EventEmitter<any>();
    @Output()
    onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

    constructor(
        public sectorHttp: SectorHttpService,
        private formBuilder: FormBuilder
    ) {
        this.form = this.formBuilder.group({
            sector_name: ''
        });
    }

    ngOnInit() {
    }

    @Input()
    set sectorId(value) {
        this._sectorId = value;
        if (this._sectorId) {
            this.sectorHttp.get(this._sectorId)
                .subscribe(sector => this.form.patchValue(sector),
                    responseError => {
                        if (responseError.status === 401) {
                            this.modal.hide();
                        }
                    });
        }
    }

    submit() {
        this.sectorHttp.update(this._sectorId, this.form.value)
            .subscribe((sector) => {
                this.onSuccess.emit(sector);
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
