import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "../components/pages/login/login.component";
import {CityListComponent} from "../components/pages/city/city-list/city-list.component";
import {AuthGuard} from "../guards/auth.guard";
import {SectorListComponent} from "../components/pages/sector/sector-list/sector-list.component";
import {UnitListComponent} from "../components/pages/unit/unit-list/unit-list.component";
import {UnitSectorListComponent} from "../components/pages/unit-sector/unit-sector-list/unit-sector-list.component";
import {UserListComponent} from "../components/pages/user/user-list/user-list.component";

const routes: Routes =[
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'cities/list', component: CityListComponent, canActivate: [AuthGuard]
    },
    {
        path: 'sectors/list', component: SectorListComponent, canActivate: [AuthGuard]
    },
    {
        path: 'units/list', component: UnitListComponent, canActivate: [AuthGuard]
    },
    {
        path: 'units/:unit/sectors/list', component: UnitSectorListComponent, canActivate: [AuthGuard]
    },
    {
        path: 'users/list', component: UserListComponent, canActivate: [AuthGuard]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: true})
  ],
  declarations: [],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
