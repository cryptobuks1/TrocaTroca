import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpErrorResponse} from "@angular/common/http";
import {Sector} from "../../../../model";
import {SectorHttpService} from "../../../../services/http/sector-http.service";

@Component({
  selector: 'sector-delete-modal',
  templateUrl: './sector-delete-modal.component.html',
  styleUrls: ['./sector-delete-modal.component.css']
})
export class SectorDeleteModalComponent implements OnInit {

    sector: Sector = null;

    _sectorId: number;

    @ViewChild(ModalComponent)
    modal: ModalComponent;

    @Output()
    onSuccess: EventEmitter<any> = new EventEmitter<any>();
    @Output()
    onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

    constructor(public sectorHttp: SectorHttpService) {
    }

    ngOnInit() {
    }

    @Input()
    set sectorId(value) {
        this._sectorId = value;
        if (this._sectorId) {
            this.sectorHttp.get(this._sectorId)
                .subscribe(sector => this.sector = sector)
        }

    }

    destroy() {
        this.sectorHttp.destroy(this._sectorId)
            .subscribe((sector) => {
                this.onSuccess.emit(sector);
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
