import {Component, OnInit, ViewChild} from '@angular/core';
import {CityNewModalComponent} from "../city-new-modal/city-new-modal.component";
import {CityEditModalComponent} from "../city-edit-modal/city-edit-modal.component";
import {CityDeleteModalComponent} from "../city-delete-modal/city-delete-modal.component";
import {CityHttpService} from "../../../../services/http/city-http.service";
import {City} from "../../../../model";
import {CityInsertService} from "./city-insert.service";
import {CityEditService} from "./city-edit.service";
import {CityDeleteService} from "./city-delete.service";

@Component({
    selector: 'city-list',
    templateUrl: './city-list.component.html',
    styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

    cities: Array<City> = [];

    pagination = {
        page: 1,
        totalItems: 0,
        itemsPerPage: 5
    };

    sortColumn = {column: '', sort: ''};

    @ViewChild(CityNewModalComponent)
    cityNewModal: CityNewModalComponent;

    @ViewChild(CityEditModalComponent)
    cityEditModal: CityEditModalComponent;

    @ViewChild(CityDeleteModalComponent)
    cityDeleteModal: CityDeleteModalComponent;

    cityId: number;
    searchText: string;

    constructor(
        public cityHttp: CityHttpService,
        protected cityInsertService: CityInsertService,
        protected cityEditService: CityEditService,
        protected cityDeleteService: CityDeleteService
    ) {
        this.cityInsertService.cityListComponent = this;
        this.cityEditService.cityListComponent = this;
        this.cityDeleteService.cityListComponent = this;
    }

    ngOnInit() {
        this.getCities();
    }

    getCities() {
        this.cityHttp.list({
            page: this.pagination.page,
            sort: this.sortColumn.column === '' ? null : this.sortColumn,
            search: this.searchText
        })
            .subscribe(response => {
                this.cities = response.data;
                this.pagination.totalItems = response.meta.total
            })
    }

    pageChanged(page) {
        this.pagination.page = page;
        this.getCities();
    }

    sort(sortColumn) {
        this.getCities();
    }

    search(search) {
        this.searchText = search;
        this.getCities();
    }

}
