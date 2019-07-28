import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'unit-search-form',
  templateUrl: './unit-search-form.component.html',
  styleUrls: ['./unit-search-form.component.css']
})
export class UnitSearchFormComponent implements OnInit {

    search = "";

    @Output()
    onSearch: EventEmitter<string> = new EventEmitter<string>();

    constructor() { }

    ngOnInit() {
    }

    submit() {
        this.onSearch.emit(this.search);
        return false;
    }

}
