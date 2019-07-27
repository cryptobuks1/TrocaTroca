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
    page = 1;
    pagination = {
        page: 1,
        totalItems: 0,
        itemsPerPage: 5
    };

    @ViewChild(CityNewModalComponent)
    cityNewModal: CityNewModalComponent;

    @ViewChild(CityEditModalComponent)
    cityEditModal: CityEditModalComponent;

    @ViewChild(CityDeleteModalComponent)
    cityDeleteModal: CityDeleteModalComponent;

    cityId: number;

    constructor(
        public cityHttp: CityHttpService,
        protected cityInsertService: CityInsertService,
        protected cityEditService: CityEditService,
        protected cityDeleteService: CityDeleteService
    ) {
    }

    ngOnInit() {
        this.cityInsertService.cityListComponent = this;
        this.cityEditService.cityListComponent = this;
        this.cityDeleteService.cityListComponent = this;
        this.getCities();
    }

    getCities() {
        this.cityHttp.list(this.pagination.page)
            .subscribe(response => {
                this.cities = response.data;
                this.pagination.totalItems = response.meta.total
            })
    }

    pageChanged(page) {
        this.pagination.page = page;
        this.getCities();
    }

}
