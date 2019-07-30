import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ExchangeHttpService} from "../../../../services/http/exchange-http.service";
import {HttpErrorResponse} from "@angular/common/http";
import {ModalComponent} from "../../../bootstrap/modal/modal.component";

@Component({
  selector: 'exchange-new-modal',
  templateUrl: './exchange-new-modal.component.html',
  styleUrls: ['./exchange-new-modal.component.css']
})
export class ExchangeNewModalComponent implements OnInit {

    form: FormGroup;

    @ViewChild(ModalComponent)
    modal: ModalComponent;

    @Output()
    onSuccess: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();


    constructor(
        private exchangeHttp: ExchangeHttpService,
        private formBuilder: FormBuilder
    ) {
        this.form = this.formBuilder.group({
            unit_id: [null, [Validators.required]],
            sector_id: [null, [Validators.required]],
            user1_id: [null, [Validators.required]],
            group1_id: [null, [Validators.required]],
            user2_id: [null, [Validators.required]],
            group2_id: [null, [Validators.required]],
            date: [null, [Validators.required]],
            turn_id: [null, [Validators.required]],
            type1_id: [null, [Validators.required]],
            type2_id: [null, [Validators.required]]
        })
    }

    ngOnInit() {
    }

    submit() {
        this.exchangeHttp.create(this.form.value)
            .subscribe((exchange) => {
                this.form.reset({
                    unit_id: null,
                    sector_id: null,
                    user1_id: null,
                    group1_id: null,
                    user2_id: null,
                    group2_id: null,
                    date: null,
                    turn_id: null,
                    type1_id: null,
                    type2_id: null
                });
                this.onSuccess.emit(exchange);
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
