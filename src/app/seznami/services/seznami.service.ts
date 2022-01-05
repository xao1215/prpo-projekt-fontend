import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Postaja } from '../models/postaja';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Termin } from '../models/termin';
import { Uporabnik } from '../models/uporabnik';


@Injectable()
export class SeznamiService {

    private headers = new HttpHeaders({'Content-Type': 'application/json'});
    private url = 'http://localhost:8080/v1/termini';
    private urlp = 'http://localhost:8080/v1/postaje';

    constructor(private http: HttpClient) {
    }

    getTermini(): Observable<Termin[]> {
        return this.http.get<Termin[]>(this.url)
                        .pipe(catchError(this.handleError));
    }

    getPostaje(): Observable<Postaja[]> {
        return this.http.get<Postaja[]>(this.urlp)
                        .pipe(catchError(this.handleError));
    }

    getTermin(id: number): Observable<Termin> {
        const url = `${this.url}/${id}`;
        return this.http.get<Termin>(url)
                        .pipe(catchError(this.handleError));
    }

    delete(id: number): Observable<number> {
        const url = `${this.url}/${id}`;
        return this.http.delete<number>(url, {headers: this.headers})
                        .pipe(catchError(this.handleError));
    }

    create(objekt:any): Observable<Termin> {
        return this.http.post<Termin>(this.url, objekt, {headers: this.headers})
                        .pipe(catchError(this.handleError));
    }

    prijava(id:number):Observable<any>{
        let objekt = `{
            "dan": "2005-01-15",\
            "od_ura": "13:00:00",\
            "do_ura": "19:01:00",\
            "postaja_id": "2",\
            "uporabnik_id": "2"\
        }`
        return this.http.put<any>(this.url + '/' + id, objekt, {headers: this.headers})
        .pipe(catchError(this.handleError));
    }

    private handleError(error: any): Promise<any> {
        console.error('Prišlo je do napake', error);
        return Promise.reject(error.message || error);
    }
}

