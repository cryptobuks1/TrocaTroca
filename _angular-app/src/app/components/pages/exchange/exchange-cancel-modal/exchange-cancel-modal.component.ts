import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Exchange, ExchangeCancel} from "../../../../model";
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpErrorResponse} from "@angular/common/http";
import {ExchangeHttpService} from "../../../../services/http/exchange-http.service";
import * as moment from 'moment';

@Component({
  selector: 'exchange-cancel-modal',
  templateUrl: './exchange-cancel-modal.component.html',
  styleUrls: ['./exchange-cancel-modal.component.css']
})
export class ExchangeCancelModalComponent implements OnInit {

    exchangeCancel: ExchangeCancel;
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

    cancel() {
        this.exchangeCancel.status_id = 3;
        // @ts-ignore
        this.exchangeCancel.date_cancelation = moment().format('YYYY-MM-DD');
        this.exchangeHttp.updateCancel(this._exchangeId, this.exchangeCancel)
            .subscribe((exchangeCancel) => {
                this.onSuccess.emit(exchangeCancel);
                this.modal.hide();
            }, error => this.onError.emit(error));
    }

    @Input()
    set exchangeId(value) {
        this._exchangeId = value;
        if (this._exchangeId) {
            this.exchangeHttp.getCancel(this._exchangeId)
                .subscribe(exchangeCancel => this.exchangeCancel = exchangeCancel);
        }

    }

    showModal() {
        this.modal.show();
    }

    hideModal($event: Event) {
        console.log($event);
    }

}
