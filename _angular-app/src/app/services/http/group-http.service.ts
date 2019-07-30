import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Group} from "../../model";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GroupHttpService {

    private baseUrl = `${environment.api.url}/groups`;

    constructor(
        private http: HttpClient
    ) { }

    list() : Observable<{ data: Array<Group> }> {

        return this.http.get<{data:Array<Group>}>(this.baseUrl);
    }

    get(id: number) : Observable<Group> {
        return this.http.get<{data: Group}>(`${this.baseUrl}/${id}` )
            .pipe(map(response =>  response.data))
    }
}
