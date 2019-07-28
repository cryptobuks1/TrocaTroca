import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpErrorResponse} from "@angular/common/http";
import {Unit} from "../../../../model";
import {UnitHttpService} from "../../../../services/http/unit-http.service";

@Component({
  selector: 'unit-new-modal',
  templateUrl: './unit-new-modal.component.html',
  styleUrls: ['./unit-new-modal.component.css']
})
export class UnitNewModalComponent implements OnInit {

    unit: Unit = {
        unit_name: '',
        city: null
    };

    @ViewChild(ModalComponent)
    modal: ModalComponent;

    @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
    @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

    constructor(public unitHttp: UnitHttpService) {
    }

    ngOnInit() {
    }

    submit() {
        this.unitHttp.create(this.unit)
            .subscribe((unit) => {
                console.log(unit);
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
