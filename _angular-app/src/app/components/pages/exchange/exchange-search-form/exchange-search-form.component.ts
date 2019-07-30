import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'exchange-search-form',
  templateUrl: './exchange-search-form.component.html',
  styleUrls: ['./exchange-search-form.component.css']
})
export class ExchangeSearchFormComponent implements OnInit {

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
