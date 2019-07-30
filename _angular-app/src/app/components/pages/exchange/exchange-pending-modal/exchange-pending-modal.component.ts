import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Exchange, ExchangePending} from "../../../../model";
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpErrorResponse} from "@angular/common/http";
import {ExchangeHttpService} from "../../../../services/http/exchange-http.service";
import * as moment from 'moment';

@Component({
  selector: 'exchange-pending-modal',
  templateUrl: './exchange-pending-modal.component.html',
  styleUrls: ['./exchange-pending-modal.component.css']
})
export class ExchangePendingModalComponent implements OnInit {

    exchangePending: ExchangePending;
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

    pending() {
        this.exchangePending.status_id = 6;
        // @ts-ignore
        this.exchangePending.date_pending = moment().format('YYYY-MM-DD');
        this.exchangeHttp.updatePending(this._exchangeId, this.exchangePending)
            .subscribe((exchangePending) => {
                this.onSuccess.emit(exchangePending);
                this.modal.hide();
            }, error => this.onError.emit(error));
    }

    @Input()
    set exchangeId(value) {
        this._exchangeId = value;
        if (this._exchangeId) {
            this.exchangeHttp.getPending(this._exchangeId)
                .subscribe(exchangePending => this.exchangePending = exchangePending);
        }

    }

    showModal() {
        this.modal.show();
    }

    hideModal($event: Event) {
        console.log($event);
    }

}
