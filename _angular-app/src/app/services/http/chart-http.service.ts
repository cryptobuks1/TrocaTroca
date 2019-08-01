import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ChartStatus} from "../../model";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class ChartHttpService {

    private baseUrl = `${environment.api.url}/charts`;

    constructor(private http: HttpClient) {
    }

    chartStatus(): Observable<{ data: Array<ChartStatus> }> {
        return this.http.get<{ data: Array<ChartStatus> }>(`${this.baseUrl}/status`);
    }
}
