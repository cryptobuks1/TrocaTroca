import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Exchange, ExchangeAuthorize} from "../../../../model";
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpErrorResponse} from "@angular/common/http";
import {ExchangeHttpService} from "../../../../services/http/exchange-http.service";
import * as moment from 'moment';

@Component({
  selector: 'exchange-authorize-modal',
  templateUrl: './exchange-authorize-modal.component.html',
  styleUrls: ['./exchange-authorize-modal.component.css']
})
export class ExchangeAuthorizeModalComponent implements OnInit {

    exchangeAuthorize: ExchangeAuthorize;
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

    authorize() {
        this.exchangeAuthorize.status_id = 1;
        // @ts-ignore
        this.exchangeAuthorize.date_autorization = moment().format('YYYY-MM-DD');
        this.exchangeHttp.updateAutorize(this._exchangeId, this.exchangeAuthorize)
            .subscribe((exchangeAuthorize) => {
                this.onSuccess.emit(exchangeAuthorize);
                this.modal.hide();
            }, error => this.onError.emit(error));
    }

    @Input()
    set exchangeId(value) {
        this._exchangeId = value;
        if (this._exchangeId) {
            this.exchangeHttp.getAuthorize(this._exchangeId)
                .subscribe(exchangeAuthorize => this.exchangeAuthorize = exchangeAuthorize);
        }

    }

    showModal() {
        this.modal.show();
    }

    hideModal($event: Event) {
        console.log($event);
    }

}
