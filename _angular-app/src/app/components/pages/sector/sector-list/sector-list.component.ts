import {Component, OnInit, ViewChild} from '@angular/core';
import {Sector} from "../../../../model";
import {SectorNewModalComponent} from "../sector-new-modal/sector-new-modal.component";
import {SectorEditModalComponent} from "../sector-edit-modal/sector-edit-modal.component";
import {SectorDeleteModalComponent} from "../sector-delete-modal/sector-delete-modal.component";
import {SectorHttpService} from "../../../../services/http/sector-http.service";
import {SectorInsertService} from "./sector-insert.service";
import {SectorEditService} from "./sector-edit.service";
import {SectorDeleteService} from "./sector-delete.service";

@Component({
  selector: 'sector-list',
  templateUrl: './sector-list.component.html',
  styleUrls: ['./sector-list.component.css']
})
export class SectorListComponent implements OnInit {

    sectors: Array<Sector> = [];

    pagination = {
        page: 1,
        totalItems: 0,
        itemsPerPage: 5
    };

    sortColumn = {column: '', sort: ''};

    @ViewChild(SectorNewModalComponent)
    sectorNewModal: SectorNewModalComponent;

    @ViewChild(SectorEditModalComponent)
    sectorEditModal: SectorEditModalComponent;

    @ViewChild(SectorDeleteModalComponent)
    sectorDeleteModal: SectorDeleteModalComponent;

    sectorId: number;
    searchText: string;

    constructor(
        public sectorHttp: SectorHttpService,
        protected sectorInsertService: SectorInsertService,
        protected sectorEditService: SectorEditService,
        protected sectorDeleteService: SectorDeleteService
    ) {
        this.sectorInsertService.sectorListComponent = this;
        this.sectorEditService.sectorListComponent = this;
        this.sectorDeleteService.sectorListComponent = this;
    }

    ngOnInit() {
        this.getSectors();
    }

    getSectors() {
        this.sectorHttp.list({
            page: this.pagination.page,
            sort: this.sortColumn.column === '' ? null : this.sortColumn,
            search: this.searchText
        })
            .subscribe(response => {
                this.sectors = response.data;
                this.pagination.totalItems = response.meta.total
            })
    }

    pageChanged(page) {
        this.pagination.page = page;
        this.getSectors();
    }

    sort(sortColumn) {
        this.getSectors();
    }

    search(search) {
        this.searchText = search;
        this.getSectors();
    }

}
