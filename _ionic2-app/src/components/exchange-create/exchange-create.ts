import {Component, OnInit} from '@angular/core';
import {Exchange, Group, Sector, Turn, Type, Unit, User} from "../../app/model";
import {UnitProvider} from "../../providers/unit/unit";
import {SectorProvider} from "../../providers/sector/sector";
import {UserProvider} from "../../providers/user/user";
import {GroupProvider} from "../../providers/group/group";
import {TurnProvider} from "../../providers/turn/turn";
import {TypeProvider} from "../../providers/type/type";
import {ExchangeProvider} from "../../providers/exchange/exchange";

/**
 * Generated class for the ExchangeCreateComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'exchange-create',
    templateUrl: 'exchange-create.html'
})
export class ExchangeCreateComponent implements OnInit {

    units: Unit[] = [];
    sectors: Sector[] = [];
    users: User[] = [];
    groups: Group[] = [];
    turns: Turn[] = [];
    types: Type[] = [];
    exchange: Exchange = {
        unit: null,
        sector: null,
        user1: null,
        group1: null,
        user2: null,
        group2: null,
        date: null,
        turn: null,
        type1: null,
        type2: null,
        status: null
    };

    constructor(
        private unitHttp: UnitProvider,
        private sectorHttp: SectorProvider,
        private userHttp: UserProvider,
        private groupHttp: GroupProvider,
        private turnHttp: TurnProvider,
        private typeHttp: TypeProvider,
        private exchangeHttp: ExchangeProvider
    ) {
        console.log('Hello ExchangeCreateComponent Component');
    }

    ngOnInit(): void {
        this.unitHttp.list()
            .subscribe(units => this.units = units)
        this.sectorHttp.list()
            .subscribe(sectors => this.sectors = sectors)
        this.userHttp.list()
            .subscribe(users => this.users = users)
        this.groupHttp.list()
            .subscribe(groups => this.groups = groups)
        this.turnHttp.list()
            .subscribe(turns => this.turns = turns)
        this.typeHttp.list()
            .subscribe(types => this.types = types)
    }

    submit() {
        this.exchangeHttp.create(this.exchange)
            .subscribe(exchange => this.exchange = exchange)
    }

}
