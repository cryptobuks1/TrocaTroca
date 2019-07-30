import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Exchange, ExchangeDecline} from "../../../../model";
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpErrorResponse} from "@angular/common/http";
import {ExchangeHttpService} from "../../../../services/http/exchange-http.service";
import * as moment from 'moment';

@Component({
  selector: 'exchange-decline-modal',
  templateUrl: './exchange-decline-modal.component.html',
  styleUrls: ['./exchange-decline-modal.component.css']
})
export class ExchangeDeclineModalComponent implements OnInit {

    exchangeDecline: ExchangeDecline;
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

    decline() {
        this.exchangeDecline.status_id = 7;
        // @ts-ignore
        this.exchangeDecline.date_declination = moment().format('YYYY-MM-DD');
        this.exchangeHttp.updateDecline(this._exchangeId, this.exchangeDecline)
            .subscribe((exchangeDecline) => {
                this.onSuccess.emit(exchangeDecline);
                this.modal.hide();
            }, error => this.onError.emit(error));
    }

    @Input()
    set exchangeId(value) {
        this._exchangeId = value;
        if (this._exchangeId) {
            this.exchangeHttp.getDecline(this._exchangeId)
                .subscribe(exchangeDecline => this.exchangeDecline = exchangeDecline);
        }

    }

    showModal() {
        this.modal.show();
    }

    hideModal($event: Event) {
        console.log($event);
    }

}
