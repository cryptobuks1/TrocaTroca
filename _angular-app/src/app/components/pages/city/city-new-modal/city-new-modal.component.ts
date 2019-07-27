import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {CityHttpService} from "../../../../services/http/city-http.service";
import {City} from "../../../../model";

@Component({
    selector: 'city-new-modal',
    templateUrl: './city-new-modal.component.html',
    styleUrls: ['./city-new-modal.component.css']
})
export class CityNewModalComponent implements OnInit {

    city: City = {
        city_name: '',
        state: null
    };

    @ViewChild(ModalComponent)
    modal: ModalComponent;

    @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
    @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

    constructor(public cityHttp: CityHttpService) {
    }

    ngOnInit() {
    }

    submit() {
        const token = window.localStorage.getItem('token');
        this.cityHttp.create(this.city)
            .subscribe((city) => {
                console.log(city);
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
