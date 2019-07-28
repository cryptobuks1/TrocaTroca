import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'city-search-form',
  templateUrl: './city-search-form.component.html',
  styleUrls: ['./city-search-form.component.css']
})
export class CitySearchFormComponent implements OnInit {

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
