import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpErrorResponse} from "@angular/common/http";
import {Unit} from "../../../../model";
import {UnitHttpService} from "../../../../services/http/unit-http.service";

@Component({
  selector: 'unit-delete-modal',
  templateUrl: './unit-delete-modal.component.html',
  styleUrls: ['./unit-delete-modal.component.css']
})
export class UnitDeleteModalComponent implements OnInit {

    unit: Unit = null;

    _unitId: number;

    @ViewChild(ModalComponent)
    modal: ModalComponent;

    @Output()
    onSuccess: EventEmitter<any> = new EventEmitter<any>();
    @Output()
    onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

    constructor(public unitHttp: UnitHttpService) {
    }

    ngOnInit() {
    }

    @Input()
    set unitId(value) {
        this._unitId = value;
        if (this._unitId) {
            this.unitHttp.get(this._unitId)
                .subscribe(unit => this.unit = unit)
        }

    }

    destroy() {
        this.unitHttp.destroy(this._unitId)
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
