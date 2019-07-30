import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Exchange, Group, Sector, Turn, Type, Unit, User} from "../../../../model";
import {FormGroup} from "@angular/forms";
import {SectorHttpService} from "../../../../services/http/sector-http.service";
import {UnitHttpService} from "../../../../services/http/unit-http.service";
import {GroupHttpService} from "../../../../services/http/group-http.service";
import {TypeHttpService} from "../../../../services/http/type-http.service";
import {UserHttpService} from "../../../../services/http/user-http.service";
import {TurnHttpService} from "../../../../services/http/turn-http.service";
import fieldsOptions from "../../exchange/exchange-form/exchange-fields-options";

@Component({
  selector: 'exchange-form',
  templateUrl: './exchange-form.component.html',
  styleUrls: ['./exchange-form.component.css']
})
export class ExchangeFormComponent implements OnInit {

    sector: Array<Sector> = [];
    unit: Array<Unit> = [];
    user: Array<User> = [];
    group: Array<Group> = [];
    turn: Array<Turn> = [];
    type: Array<Type> = [];
    exchange: Exchange;
    unitId: number;
    sectorId: number;
    user1Id: number;
    user2Id: number;
    group1Id: number;
    group2Id: number;
    turnId: number;
    type1Id: number;
    type2Id: number;

    @Input()
    form: FormGroup;

    constructor(
        private changeRef: ChangeDetectorRef,
        private sectorHttp: SectorHttpService,
        private unitHttp: UnitHttpService,
        private groupHttp: GroupHttpService,
        private turnHttp: TurnHttpService,
        private typeHttp: TypeHttpService,
        private usersHttp: UserHttpService
    ) { }

    ngOnInit() {
        this.getSectors();
        this.getUnits();
        this.getUsers();
        this.getGroups();
        this.getTurns();
        this.getTypes();
    }

    ngOnChanges() {
        this.changeRef.detectChanges();
    }

    getSectors() {
        this.sectorHttp.listAll()
            .subscribe(response => {
                this.sector = response.data;
            })
    }

    getUnits() {
        this.unitHttp.listAll()
            .subscribe(response => {
                this.unit = response.data;
            })
    }

    getUsers() {
        this.usersHttp.listAll()
            .subscribe(response => {
                this.user = response.data;
            })
    }

    getGroups() {
        this.groupHttp.list()
            .subscribe(response => {
                this.group = response.data;
            })
    }

    getTurns() {
        this.turnHttp.list()
            .subscribe(response => {
                this.turn = response.data;
            })
    }

    getTypes() {
        this.typeHttp.list()
            .subscribe(response => {
                this.type = response.data;
            })
    }

    get fieldsOptions() : any {
        return fieldsOptions;
    }



}
