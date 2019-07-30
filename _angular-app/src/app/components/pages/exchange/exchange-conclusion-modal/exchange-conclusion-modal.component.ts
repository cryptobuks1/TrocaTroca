import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {ExchangeHttpService} from "../../../../services/http/exchange-http.service";
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {Exchange, ExchangeConclusion} from "../../../../model";
import * as moment from 'moment';

@Component({
  selector: 'exchange-conclusion-modal',
  templateUrl: './exchange-conclusion-modal.component.html',
  styleUrls: ['./exchange-conclusion-modal.component.css']
})
export class ExchangeConclusionModalComponent implements OnInit {

    exchangeConclusion: ExchangeConclusion;
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

    conclusion() {
        this.exchangeConclusion.status_id = 4;
        //@ts-ignore
        this.exchangeConclusion.date_conclusion = moment().format('YYYY-MM-DD');
        this.exchangeHttp.updateConclusion(this._exchangeId, this.exchangeConclusion)
            .subscribe((exchangeConclusion) => {
                this.onSuccess.emit(exchangeConclusion);
                this.modal.hide();
            }, error => this.onError.emit(error));
    }

    @Input()
    set exchangeId(value) {
        this._exchangeId = value;
        if (this._exchangeId) {
            this.exchangeHttp.getConclusion(this._exchangeId)
                .subscribe(exchangeConclusion => this.exchangeConclusion = exchangeConclusion);
        }

    }

    showModal() {
        this.modal.show();
    }

    hideModal($event: Event) {
        console.log($event);
    }

}
