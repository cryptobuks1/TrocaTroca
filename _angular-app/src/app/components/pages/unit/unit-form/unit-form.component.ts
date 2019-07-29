import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import fieldsOptions from "../../unit/unit-form/unit-fields-options";
import {CityHttpService} from "../../../../services/http/city-http.service";
import {City} from "../../../../model";

@Component({
  selector: 'unit-form',
  templateUrl: './unit-form.component.html',
  styleUrls: ['./unit-form.component.css']
})
export class UnitFormComponent implements OnInit {

    @Input()
    form: FormGroup;

    cities: City[] = [];

    constructor(
        private changeRef: ChangeDetectorRef,
        public cityHttp: CityHttpService,
    ) { }

    ngOnInit() {
        this.getCities();
    }

    getCities() {
        this.cityHttp.listAll()
            .subscribe(response => {
                this.cities = response.data;
            })
    }

    ngOnChanges() {
        this.changeRef.detectChanges();
    }

    get fieldsOptions(): any {
        return fieldsOptions;
    }

}
