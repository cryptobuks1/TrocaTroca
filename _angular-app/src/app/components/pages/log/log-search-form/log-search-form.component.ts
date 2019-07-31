import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'log-search-form',
  templateUrl: './log-search-form.component.html',
  styleUrls: ['./log-search-form.component.css']
})
export class LogSearchFormComponent implements OnInit {

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
