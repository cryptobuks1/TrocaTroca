import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { CityListComponent } from './components/pages/city/city-list/city-list.component';
import { AlertErrorComponent } from './components/bootstrap/alert-error/alert-error.component';
import { ModalComponent } from './components/bootstrap/modal/modal.component';
import { CityNewModalComponent } from './components/pages/city/city-new-modal/city-new-modal.component';
import { CityEditModalComponent } from './components/pages/city/city-edit-modal/city-edit-modal.component';
import { CityDeleteModalComponent } from './components/pages/city/city-delete-modal/city-delete-modal.component';
import {NgxPaginationModule} from "ngx-pagination";
import { SectorListComponent } from './components/pages/sector/sector-list/sector-list.component';
import { SectorEditModalComponent } from './components/pages/sector/sector-edit-modal/sector-edit-modal.component';
import { SectorNewModalComponent } from './components/pages/sector/sector-new-modal/sector-new-modal.component';
import { SectorDeleteModalComponent } from './components/pages/sector/sector-delete-modal/sector-delete-modal.component';
import { UnitListComponent } from './components/pages/unit/unit-list/unit-list.component';
import { UnitEditModalComponent } from './components/pages/unit/unit-edit-modal/unit-edit-modal.component';
import { UnitNewModalComponent } from './components/pages/unit/unit-new-modal/unit-new-modal.component';
import { UnitDeleteModalComponent } from './components/pages/unit/unit-delete-modal/unit-delete-modal.component';

const routes: Routes = [
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'cities/list', component: CityListComponent
    },
    {
        path: 'sectors/list', component: SectorListComponent
    },
    {
        path: 'units/list', component: UnitListComponent
    },
    { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CityListComponent,
    AlertErrorComponent,
    ModalComponent,
    CityNewModalComponent,
    CityEditModalComponent,
    CityDeleteModalComponent,
    SectorListComponent,
    SectorEditModalComponent,
    SectorNewModalComponent,
    SectorDeleteModalComponent,
    UnitListComponent,
    UnitEditModalComponent,
    UnitNewModalComponent,
    UnitDeleteModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
