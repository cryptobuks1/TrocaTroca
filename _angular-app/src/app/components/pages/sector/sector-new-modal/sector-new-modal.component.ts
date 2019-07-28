import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpErrorResponse} from "@angular/common/http";
import {Sector} from "../../../../model";
import {SectorHttpService} from "../../../../services/http/sector-http.service";

@Component({
    selector: 'sector-new-modal',
    templateUrl: './sector-new-modal.component.html',
    styleUrls: ['./sector-new-modal.component.css']
})
export class SectorNewModalComponent implements OnInit {

    sector: Sector = {
        sector_name: ''
    };

    @ViewChild(ModalComponent)
    modal: ModalComponent;

    @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
    @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

    constructor(public sectorHttp: SectorHttpService) {
    }

    ngOnInit() {
    }

    submit() {
        this.sectorHttp.create(this.sector)
            .subscribe((sector) => {
                console.log(sector);
                this.onSuccess.emit(sector);
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
