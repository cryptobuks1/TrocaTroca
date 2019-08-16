import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Exchange} from "../../../../model";
import {HttpErrorResponse} from "@angular/common/http";
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {ExchangeHttpService} from "../../../../services/http/exchange-http.service";

@Component({
  selector: 'exchange-view-modal',
  templateUrl: './exchange-view-modal.component.html',
  styleUrls: ['./exchange-view-modal.component.css']
})
export class ExchangeViewModalComponent implements OnInit {

    exchange: Exchange;

    @Input()
    _exchangeId: number = 1;

    @Output()
    onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

    @ViewChild(ModalComponent)
    modal: ModalComponent;

    constructor(private exchangeHttp: ExchangeHttpService) { }

    ngOnInit() {
        //this.exchangeId();
    }

    @Input()
    set exchangeId(value) {
        this._exchangeId = value;
        if (this._exchangeId) {
            this.exchangeHttp.get(this._exchangeId)
                .subscribe((exchange) => this.exchange = exchange,
                    responseError => {
                        if (responseError.status === 401) {
                            this.modal.hide();
                        }
                    });
        }

    }

    showModal() {
        this.modal.show();
    }

    hideModal($event: Event) {
        console.log($event);
    }

}
