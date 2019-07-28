import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {UnitSector} from "../../model";
import {map} from "rxjs/operators";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UnitSectorHttpService {

    constructor(private http: HttpClient) {
    }

    list(unitId: number): Observable<UnitSector> {
        return this.http.get<{ data: UnitSector }>(this.getBaseUrl(unitId))
            .pipe(map(response => response.data))
    }

    create(unitId: number, sectorsId: number[]): Observable<UnitSector> {
        return this.http.post<{ data: UnitSector }>(this.getBaseUrl(unitId), {sectors: sectorsId})
            .pipe(map(response => response.data))
    }

    private getBaseUrl(unitId: number, sectorId: number = null) : string {
        let baseUrl = `${environment.api.url}/${unitId}/sectors`;
        if (sectorId) {
            baseUrl += `/${sectorId}`;
        }
        return baseUrl;
    }
}
