import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Exchange, ExchangeConfirm} from "../../../../model";
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpErrorResponse} from "@angular/common/http";
import {ExchangeHttpService} from "../../../../services/http/exchange-http.service";
import * as moment from 'moment';

@Component({
  selector: 'exchange-confirm-modal',
  templateUrl: './exchange-confirm-modal.component.html',
  styleUrls: ['./exchange-confirm-modal.component.css']
})
export class ExchangeConfirmModalComponent implements OnInit {

    exchangeConfirm: ExchangeConfirm;
    exchange: Exchange = null;

    _exchangeId: number;

    @ViewChild(ModalComponent)
    modal: ModalComponent;

    @Output()
    onSuccess: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

    constructor(
        private exchangeHttp: ExchangeHttpService
    ) { }

    ngOnInit() {
    }

    confirm() {
        this.exchangeConfirm.status_id = 5;
        // @ts-ignore
        this.exchangeConfirm.date_confirmation = moment().format('YYYY-MM-DD');
        this.exchangeHttp.updateConfirm(this._exchangeId, this.exchangeConfirm)
            .subscribe((city) => {
                this.onSuccess.emit(city);
                this.modal.hide();
            }, error => this.onError.emit(error));
    }

    @Input()
    set exchangeId(value) {
        this._exchangeId = value;
        if (this._exchangeId) {
            this.exchangeHttp.getConfirm(this._exchangeId)
                .subscribe(exchangeConfirm => this.exchangeConfirm = exchangeConfirm);
        }

    }

    showModal() {
        this.modal.show();
    }

    hideModal($event: Event) {
        console.log($event);
    }

}
