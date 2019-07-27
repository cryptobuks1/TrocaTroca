import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpErrorResponse} from "@angular/common/http";
import {City} from "../../../../model";
import {CityHttpService} from "../../../../services/http/city-http.service";

@Component({
    selector: 'city-delete-modal',
    templateUrl: './city-delete-modal.component.html',
    styleUrls: ['./city-delete-modal.component.css']
})
export class CityDeleteModalComponent implements OnInit {

    city: City = null;

    _cityId: number;

    @ViewChild(ModalComponent)
    modal: ModalComponent;

    @Output()
    onSuccess: EventEmitter<any> = new EventEmitter<any>();
    @Output()
    onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

    constructor(public cityHttp: CityHttpService) {
    }

    ngOnInit() {
    }

    @Input()
    set cityId(value) {
        this._cityId = value;
        if (this._cityId) {
            this.cityHttp.get(this._cityId)
                .subscribe(city => this.city = city)
        }

    }

    destroy() {
        this.cityHttp.destroy(this._cityId)
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

}
