import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {

  constructor(private apiService: ApiService) { }
  Create(body:any) {
 
    return this.apiService.post(`TechnologyCategory/Save`,body).pipe(map(response => {
      return response
    }))
  }
}