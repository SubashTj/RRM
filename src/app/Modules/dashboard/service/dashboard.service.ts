import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private apiService: ApiService) { }
  GetSummary() {
    return this.apiService.get(`Dashboard/GetSummary`).pipe(map(response => {
      return response
    }));
  }
  GetImportant() {
    return this.apiService.get(`Dashboard/GetImportantDetails`).pipe(map(response => {
      return response
    }));
  }
  GetRequirement(obj: any): Observable<any> {
    return this.apiService.GetList(`Requirement/GetRequirementListPage`, obj).pipe(map(response => {
      return response
    }));
  }
  GetOpenRequirement(obj: any): Observable<any> {
    return this.apiService.GetList(`Dashboard/GetDashboardOpenRequirementListPage`, obj).pipe(map(response => {
      return response
    }));
  }
  GetAssignedRequirement(obj: any): Observable<any> {
    return this.apiService.GetList(`Dashboard/GetUsersRequirementListPages`, obj).pipe(map(response => {
      return response
    }));
  }
  GetRequirementStatus(obj: any): Observable<any> {
    return this.apiService.GetList(`Dashboard/GetRequirementStatusListPages`, obj).pipe(map(response => {
      return response
    }));
  }
  GetConsultant(obj: any): Observable<any> {
    return this.apiService.GetList(`Dashboard/GetConsultantOpeningListPages`, obj).pipe(map(response => {
      return response
    }));
  }
  GetData(obj: any): Observable<any> {
    return this.apiService.getData(`InterviewSchedule/GetJoiningRatioDetails`, obj).pipe(map(response => {
      return response
    }));
  }
  GetVoiceRecording(obj: any): Observable<any> {
    return this.apiService.getData(`InterviewSchedule/GetInterviewScheduleVoiceDetails`, obj).pipe(map(response => {
      return response
    }));
  }
  GetDatas(obj: any): Observable<any> {
    return this.apiService.getData(`InterviewSchedule/GetJoiningRatioDetailsByQuarters?`, obj).pipe(map(response => {
      return response
    }));
  }
  GetCummulative(obj: any): Observable<any> {
    return this.apiService.post(`InterviewSchedule/GetCummulativeJoiningRatioDetails`, obj).pipe(map(response => {
      return response
    }));
  }
  GetEmployees() {
    return this.apiService.get(`Requirement/GetAllEmployees`).pipe(map(response => {
      return response
    }));
  }
  GetInterview(obj: any) {
    return this.apiService.post(`Dashboard/GetRequirementPercentage`, obj).pipe(map(response => {
      return response
    }));
  }
}
//