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
    page = 1;
    pagination = {
        page: 1,
        totalItems: 0,
        itemsPerPage: 5
    };

    @ViewChild(SectorNewModalComponent)
    sectorNewModal: SectorNewModalComponent;

    @ViewChild(SectorEditModalComponent)
    sectorEditModal: SectorEditModalComponent;

    @ViewChild(SectorDeleteModalComponent)
    sectorDeleteModal: SectorDeleteModalComponent;

    sectorId: number;

    constructor(
        public sectorHttp: SectorHttpService,
        protected sectorInsertService: SectorInsertService,
        protected sectorEditService: SectorEditService,
        protected sectorDeleteService: SectorDeleteService
    ) {
    }

    ngOnInit() {
        this.sectorInsertService.sectorListComponent = this;
        this.sectorEditService.sectorListComponent = this;
        this.sectorDeleteService.sectorListComponent = this;
        this.getSectors();
    }

    getSectors() {
        this.sectorHttp.list(this.pagination.page)
            .subscribe(response => {
                this.sectors = response.data;
                this.pagination.totalItems = response.meta.total
            })
    }

    pageChanged(page) {
        this.pagination.page = page;
        this.getSectors();
    }

}
