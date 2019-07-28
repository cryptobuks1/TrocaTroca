import { Component, OnInit } from '@angular/core';
import {Unit, UnitSector} from "../../../../model";
import {ActivatedRoute} from "@angular/router";
import {UnitHttpService} from "../../../../services/http/unit-http.service";
import {UnitSectorHttpService} from "../../../../services/http/unit-sector-http.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'unit-sector-list',
  templateUrl: './unit-sector-list.component.html',
  styleUrls: ['./unit-sector-list.component.css']
})
export class UnitSectorListComponent implements OnInit {

    unitId: number;
    unit: Unit = null;
    unitSector: UnitSector = null;

    constructor(
        private route: ActivatedRoute,
        private unitHttp: UnitHttpService,
        private unitSectorHttp: UnitSectorHttpService,
    ) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.unitId = params.unit;
            this.getUnit();
            this.getUnitSector();
        })
    }

    getUnit() {
        this.unitHttp.get(this.unitId)
            .subscribe(unit => this.unit = unit)
    }

    getUnitSector() {
        this.unitSectorHttp.list(this.unitId)
            .subscribe(unitSector => this.unitSector = unitSector)
    }

    onInsertSuccess($event: any) {
        this.getUnitSector();
    }

    onInsertError($event: HttpErrorResponse) {
        console.log($event);
    }

}
