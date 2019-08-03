import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ChartStatus, Status} from "../../model";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StatusHttpService {

    private baseUrl = `${environment.api.url}/statuses`;

    constructor(private http: HttpClient) {
    }

    list(): Observable<{ data: Array<Status> }> {
        return this.http.get<{ data: Array<Status> }>(this.baseUrl)
    }
}
