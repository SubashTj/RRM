import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ApiService } from "./api.service";
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};
@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {


    constructor(private apiService: ApiService, private _httpClient: HttpClient) {

    }
    post(path: string, obj: any): Observable<any> {
        const body = new HttpParams({ fromObject: obj });

        return this._httpClient.post(`${environment.LOGIN_URL}${path}`, body, httpOptions)
    }
    setAuth(data: any) {
        localStorage.setItem('currentUser', data.access_token);

    }
    logout() {
        localStorage.removeItem('currentUser');
    }
    public get loggedIn(): boolean {
        return (localStorage.getItem('currentUser') !== null);
    }
    getToken() {
        return localStorage.getItem('currentUser');
    }
}