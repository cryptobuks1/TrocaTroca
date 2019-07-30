import { Injectable } from '@angular/core';
import {Type} from "../../model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TypeHttpService {

    private baseUrl = `${environment.api.url}/types`;

    constructor(
        private http: HttpClient
    ) { }

    list() : Observable<{ data: Array<Type> }> {

        return this.http.get<{data:Array<Type>}>(this.baseUrl);
    }

    get(id: number) : Observable<Type> {
        return this.http.get<{data: Type}>(`${this.baseUrl}/${id}` )
            .pipe(map(response =>  response.data))
    }
}
