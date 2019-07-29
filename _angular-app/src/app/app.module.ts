import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
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
import { UnitSectorListComponent } from './components/pages/unit-sector/unit-sector-list/unit-sector-list.component';
import { UnitSectorNewModalComponent } from './components/pages/unit-sector/unit-sector-new-modal/unit-sector-new-modal.component';
import { UserListComponent } from './components/pages/user/user-list/user-list.component';
import { UserEditModalComponent } from './components/pages/user/user-edit-modal/user-edit-modal.component';
import { UserNewModalComponent } from './components/pages/user/user-new-modal/user-new-modal.component';
import { UserDeleteModalComponent } from './components/pages/user/user-delete-modal/user-delete-modal.component';
import { NavbarComponent } from './components/bootstrap/navbar/navbar.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {JWT_OPTIONS, JwtModule} from "@auth0/angular-jwt";
import {AuthService} from "./services/auth.service";
import { SortColumnComponent } from './components/common/sort-column/sort-column.component';
import { SectorSearchFormComponent } from './components/pages/sector/sector-search-form/sector-search-form.component';
import { CitySearchFormComponent } from './components/pages/city/city-search-form/city-search-form.component';
import { UnitSearchFormComponent } from './components/pages/unit/unit-search-form/unit-search-form.component';
import { UserSearchFormComponent } from './components/pages/user/user-search-form/user-search-form.component';
import { SectorFormComponent } from './components/pages/sector/sector-form/sector-form.component';
import { FieldErrorComponent } from './components/bootstrap/field-error/field-error.component';
import { IsInvalidDirective } from './directives/is-invalid.directive';
import { ListErrorComponent } from './components/bootstrap/list-error/list-error.component';
import { CardErrorComponent } from './components/bootstrap/card-error/card-error.component';
import { CityFormComponent } from './components/pages/city/city-form/city-form.component';
import { UnitFormComponent } from './components/pages/unit/unit-form/unit-form.component';
import { UserFormComponent } from './components/pages/user/user-form/user-form.component';

function jwtFactory(authservice: AuthService) {
    return {
        whitelistedDomains: [
            new RegExp('localhost:8000/*')
        ],
        tokenGetter: () => {
            return authservice.getToken()
        }
    }
}

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
    UnitDeleteModalComponent,
    UnitSectorListComponent,
    UnitSectorNewModalComponent,
    UserListComponent,
    UserEditModalComponent,
    UserNewModalComponent,
    UserDeleteModalComponent,
    NavbarComponent,
    SortColumnComponent,
    SectorSearchFormComponent,
    CitySearchFormComponent,
    UnitSearchFormComponent,
    UserSearchFormComponent,
    SectorFormComponent,
    FieldErrorComponent,
    IsInvalidDirective,
    ListErrorComponent,
    CardErrorComponent,
    CityFormComponent,
    UnitFormComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    AppRoutingModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
        jwtOptionsProvider: {
            provide: JWT_OPTIONS,
            useFactory: jwtFactory,
            deps: [AuthService]
        }
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
