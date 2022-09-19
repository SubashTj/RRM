import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class InterviewQuestionService {

  constructor(private apiService: ApiService) { }
  getIQ() {
    return this.apiService.get(`TechnologyCategory/GetAllTechnologyCategories`).pipe(map(response => {
      return response
    }))
  }
  GetQuestions(obj: any): Observable<any> {
    return this.apiService.GetList(`InterViewQuestion/GetInterViewQuestionsListing`, obj).pipe(map(response => {
      return response
    }))
  }
  SaveIQ(obj: any) {
    return this.apiService.post(`InterViewQuestion/Save`, obj).pipe(map(response => {
      return response
    }))
  }
  GetList(formData: any) {
    return this.apiService.post(`InterViewQuestion/GetInterViewQuestionsListing`, formData).pipe(map(response => {
      return response
    }))
  }
  DeleteIq(obj: any) {
    return this.apiService.delete(`InterViewQuestion/Delete`, obj).pipe(map(response => {
      return response
    }))
  }
  DeleteTech(obj: any) {
    return this.apiService.delete(`TechnologyCategory/DeleteTechnology`, obj).pipe(map(response => {
      return response
    }))
  }
}
// 