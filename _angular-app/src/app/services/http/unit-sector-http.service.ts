import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {UnitSector} from "../../model";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UnitSectorHttpService {

    constructor(private http: HttpClient) {
    }

    list(unitId: number): Observable<UnitSector> {
        const token = window.localStorage.getItem('token');
        return this.http.get<{ data: UnitSector }>(this.getBaseUrl(unitId), {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .pipe(map(response => response.data))
    }

    create(unitId: number, sectorsId: number[]): Observable<UnitSector> {
        const token = window.localStorage.getItem('token');
        return this.http.post<{ data: UnitSector }>(this.getBaseUrl(unitId), {sectors: sectorsId}, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .pipe(map(response => response.data))
    }

    private getBaseUrl(unitId: number, sectorId: number = null) : string {
        let baseUrl = `http://localhost:8000/api/units/${unitId}/sectors`;
        if (sectorId) {
            baseUrl += `/${sectorId}`;
        }
        return baseUrl;
    }
}
