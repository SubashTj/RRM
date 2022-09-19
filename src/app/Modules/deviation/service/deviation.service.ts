import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class DeviationService {

  constructor(private apiService:ApiService) { }
  getDeviation(obj:any):Observable<any>{
    return this.apiService.getData(`Deviation/GetDeviation`,obj).pipe(map(response=>{
      return response
    }))
  }
}
