import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class HrStatusService {

  constructor(private apiService: ApiService) { }
  getEmployees() {
    return this.apiService.get(`Requirement/GetAllEmployees`).pipe(map(response => {
      return response
    }))
  }
  getStatus(obj: any): Observable<any> {
    return this.apiService.getData(`DailyStatus/GetHRDailyStatusReport`, obj).pipe(map(response => {
      return response
    }))
  }
}
