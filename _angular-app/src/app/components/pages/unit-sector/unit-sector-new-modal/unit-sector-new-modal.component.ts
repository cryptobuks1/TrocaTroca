import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Sector, UnitSector} from "../../../../model";
import {HttpErrorResponse} from "@angular/common/http";
import {UnitSectorHttpService} from "../../../../services/http/unit-sector-http.service";
import {SectorHttpService} from "../../../../services/http/sector-http.service";

@Component({
  selector: 'unit-sector-new-modal',
  templateUrl: './unit-sector-new-modal.component.html',
  styleUrls: ['./unit-sector-new-modal.component.css']
})
export class UnitSectorNewModalComponent implements OnInit {

    @Input()
    unitId: number;
    @Input()
    unitSector: UnitSector = null;
    sectors: Sector[] = [];
    sectorsId: number[] = [];

    @Output()
    onSuccess: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

    constructor(
        private unitSectorHttp: UnitSectorHttpService,
        private sectorHttp: SectorHttpService
    ) {
    }

    ngOnInit() {
        this.getSectors();
    }

    getSectors() {
        this.sectorHttp.list({all: 1})
            .subscribe(response => {
                this.sectors = response.data;
            })
    }

    submit() {
        const sectorsId = this.mergeSectors();
        this.unitSectorHttp.create(this.unitId, sectorsId)
            .subscribe(unitSector => this.onSuccess.emit(unitSector),
                error => this.onError.emit(error));
    }

    private mergeSectors(): number[] {
        const sectorsId = this.unitSector.sectors.map((sector) => sector.id);
        const newSectorsId = this.sectorsId.filter((sector) => {
            return sectorsId.indexOf(sector) == -1;
        });
        return sectorsId.concat(newSectorsId);
    }

}
