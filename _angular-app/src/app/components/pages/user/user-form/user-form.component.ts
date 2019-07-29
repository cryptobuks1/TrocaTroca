import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import fieldsOptions from "../../user/user-form/user-fields-options";
import {SectorHttpService} from "../../../../services/http/sector-http.service";
import {UnitHttpService} from "../../../../services/http/unit-http.service";
import {Sector, Unit} from "../../../../model";

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

    @Input()
    form: FormGroup;

    units: Unit[] = [];
    sectors: Sector[] = [];

    constructor(
        private changeRef: ChangeDetectorRef,
        private sectorHttp: SectorHttpService,
        private unitHttp: UnitHttpService
    ) {
    }

    ngOnInit() {
        this.getUnits();
        this.getSectors();
    }


    ngOnChanges() {
        this.changeRef.detectChanges();
    }

    getUnits() {
        this.unitHttp.listAll()
            .subscribe(response => {
                this.units = response.data;
            })
    }

    getSectors() {
        this.sectorHttp.listAll()
            .subscribe(response => {
                this.sectors = response.data;
            })
    }

    get fieldsOptions(): any {
        return fieldsOptions

    }
}