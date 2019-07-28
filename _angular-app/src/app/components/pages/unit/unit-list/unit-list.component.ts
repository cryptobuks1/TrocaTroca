import {Component, OnInit, ViewChild} from '@angular/core';
import {Unit} from "../../../../model";
import {UnitNewModalComponent} from "../unit-new-modal/unit-new-modal.component";
import {UnitEditModalComponent} from "../unit-edit-modal/unit-edit-modal.component";
import {UnitDeleteModalComponent} from "../unit-delete-modal/unit-delete-modal.component";
import {UnitHttpService} from "../../../../services/http/unit-http.service";
import {UnitInsertService} from "./unit-insert.service";
import {UnitEditService} from "./unit-edit.service";
import {UnitDeleteService} from "./unit-delete.service";

@Component({
  selector: 'unit-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.css']
})
export class UnitListComponent implements OnInit {

    units: Array<Unit> = [];

    pagination = {
        page: 1,
        totalItems: 0,
        itemsPerPage: 5
    };

    sortColumn = {column: '', sort: ''};

    @ViewChild(UnitNewModalComponent)
    unitNewModal: UnitNewModalComponent;

    @ViewChild(UnitEditModalComponent)
    unitEditModal: UnitEditModalComponent;

    @ViewChild(UnitDeleteModalComponent)
    unitDeleteModal: UnitDeleteModalComponent;

    unitId: number;
    searchText: string;

    constructor(
        public unitHttp: UnitHttpService,
        protected unitInsertService: UnitInsertService,
        protected unitEditService: UnitEditService,
        protected unitDeleteService: UnitDeleteService
    ) {
        this.unitInsertService.unitListComponent = this;
        this.unitEditService.unitListComponent = this;
        this.unitDeleteService.unitListComponent = this;
    }

    ngOnInit() {
        this.getUnits();
    }

    getUnits() {
        this.unitHttp.list({
            page: this.pagination.page,
            sort: this.sortColumn.column === '' ? null : this.sortColumn,
            search: this.searchText
        })
            .subscribe(response => {
                this.units = response.data;
                this.pagination.totalItems = response.meta.total
            })
    }

    pageChanged(page) {
        this.pagination.page = page;
        this.getUnits();
    }

    sort(sortColumn) {
        this.getUnits();
    }

    search(search) {
        this.searchText = search;
        this.getUnits();
    }

}
