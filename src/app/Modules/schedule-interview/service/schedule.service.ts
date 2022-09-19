import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private apiService: ApiService) { }
  GetList(obj: any): Observable<any> {
    return this.apiService.GetList(`InterviewSchedule/GetInterviewSchedulesPage`, obj).pipe(map(response => {
      return response
    }));
  }
  GetData(obj: any): Observable<any> {
    return this.apiService.getData(`InterviewSchedule/GetInterviewScheduleByCandidateId?`, obj).pipe(map(response => {
      return response
    }));
  }
  AllotedSchedules(): Observable<any> {
    return this.apiService.get(`InterviewSchedule/AllotedSchedules`).pipe(map(response => {
      return response
    }));
  }
  GetRequirement() {
    return this.apiService.get(`Requirement/GetAllReqirements`,).pipe(map(response => {
      return response
    }));
  }
  GetInterviewType() {
    return this.apiService.get(`InterviewType/GetAllInterviewTypes`,).pipe(map(response => {
      return response
    }));
  }
  GetAllEmployeeExternal() {
    return this.apiService.get(`Requirement/GetAllEmployeesExternal`,).pipe(map(response => {
      return response
    }));
  }
  Save(post: any) {
    return this.apiService.post(`InterviewSchedule/SaveDetails`, post).pipe(map(response => {
      return response
    }));
  }
  DeleteSchedule(obj: any) {
    return this.apiService.delete(`InterviewSchedule/DeleteInterviewSchedule`, obj).pipe(map(response => {
      return response
    }));
  }
  SaveInterviewType(post: any) {
    return this.apiService.post(`InterviewType/Save`, post).pipe(map(response => {
      return response
    }));
  }
  SaveExternal(post: any) {

    return this.apiService.getData(`ExternalInterviewer/SaveExternalInterviewer`, post).pipe(map(response => {
      return response
    }));
  }
  GetSkill(post: any) {
    return this.apiService.getData(`InterviewSchedule/GetValidPlans?`, post).pipe(map(response => {
      return response
    }));
  }
  GetSkillDes(post: any) {
    return this.apiService.getData(`InterviewSchedule/GetSkillPlanDescription?`, post).pipe(map(response => {
      return response
    }));
  }
  GetOne(data: any) {
    return this.apiService.getData(`InterviewSchedule/GetInterviewScheduleById?`, data).pipe(map(response => {
      return response
    }));
  }
}

