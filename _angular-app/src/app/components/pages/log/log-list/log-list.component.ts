import {Component, OnInit} from '@angular/core';
import {LogHttpService} from "../../../../services/http/log-http.service";
import {Log} from "../../../../model";

@Component({
  selector: 'log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.css']
})
export class LogListComponent implements OnInit {

    logs: Array<Log> = [];

    pagination = {
        page: 1,
        totalItems: 0,
        itemsPerPage: 5
    };

    sortColumn = {column: '', sort: ''};

    searchText: string;

    constructor(
        public logHttp: LogHttpService
    ) {
    }

    ngOnInit() {
        this.getLogs();
    }

    getLogs() {
        this.logHttp.list({
            page: this.pagination.page,
            sort: this.sortColumn.column === '' ? null : this.sortColumn,
            search: this.searchText
        })
            .subscribe(response => {
                this.logs = response.data;
                this.pagination.totalItems = response.meta.total
            })
    }

    pageChanged(page) {
        this.pagination.page = page;
        this.getLogs();
    }

    sort(sortColumn) {
        this.getLogs();
    }

    search(search) {
        this.searchText = search;
        this.getLogs();
    }

}
