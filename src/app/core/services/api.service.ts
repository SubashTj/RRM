import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};
@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private _httpClient: HttpClient) { }

    getList<T>(url: string) {
        return this._httpClient.get<T[]>(`${environment.API_URL}${url}`).pipe(
        )
    }

    // Error handling 
    private handleError(error: any) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return throwError(errorMessage);
    }
    get(path: string) {
        return this._httpClient.get(`${environment.BASE_URL}${path}`,);
    }
    getData(path: string, params: HttpParams = new HttpParams()) {
        return this._httpClient.get(`${environment.BASE_URL}${path}`, { params });

    }
    post(path: string, body: Object = {}) {
        return this._httpClient.post(`${environment.BASE_URL}${path}`, body);
    }
    rfp(path: string, body: Object = {}) {
        return this._httpClient.post(`${environment.RFP_URL}${path}`, body);
    }
    delete(path: string, params: HttpParams = new HttpParams()) {
        return this._httpClient.get(`${environment.BASE_URL}${path}`, { params });
    }
    GetList(path: string, obj: any) {
        const body = new HttpParams({ fromObject: obj });
        return this._httpClient.post(`${environment.BASE_URL}${path}`, body, httpOptions);
    }
}