import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Login } from '../Model/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private auth:AuthenticationService) { }
  Login(obj: any): Observable<Login> {
    return this.auth.post(`token`, obj).pipe(map(response => (response)))
  }
}
