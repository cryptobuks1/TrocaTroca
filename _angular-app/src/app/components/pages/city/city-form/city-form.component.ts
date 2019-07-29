import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import fieldsOptions from "../../city/city-form/city-fields-options";
import {City, State} from "../../../../model";
import {StateHttpService} from "../../../../services/http/state-http.service";

@Component({
  selector: 'city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.css']
})
export class CityFormComponent implements OnInit {

    state: State[] = [];
    stateId: number;
    city: City;

    @Input()
    form: FormGroup;

    constructor(
        private changeRef: ChangeDetectorRef,
        private stateHttp: StateHttpService
    ) { }

    ngOnInit() {
        this.getStates();
    }

    getStates() {
        this.stateHttp.list()
            .subscribe(response => {
                this.state = response.data;
            });
    }

    ngOnChanges() {
        this.changeRef.detectChanges();
    }

    get fieldsOptions(): any {
        return fieldsOptions;
    }

}
