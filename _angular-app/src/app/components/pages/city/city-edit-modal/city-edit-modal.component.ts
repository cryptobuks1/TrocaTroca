import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpErrorResponse} from "@angular/common/http";
import {City} from "../../../../model";
import {CityHttpService} from "../../../../services/http/city-http.service";

@Component({
    selector: 'city-edit-modal',
    templateUrl: './city-edit-modal.component.html',
    styleUrls: ['./city-edit-modal.component.css']
})
export class CityEditModalComponent implements OnInit {

    city: City = {
        city_name: '',
        state: null
    };

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

    submit() {
        this.cityHttp.update(this._cityId, this.city)
            .subscribe((city) => {
                this.onSuccess.emit(city);
                this.modal.hide();
                //this.getCities();
            }, error => this.onError.emit(error));
    }

    showModal() {
        this.modal.show();
    }

    hideModal($event: Event) {
        console.log($event);
    }

}
