import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class RequirementService {

  constructor(private apiService: ApiService) { }

  GetDepartment() {
    return this.apiService.get(`Requirement/GetDepartments`).pipe(map(response => {
      return response
    }));
  }

  GetDesignation() {
    return this.apiService.get(`Requirement/GetDesignations`).pipe(map(response => {
      return response
    }));
  }
  GetCommunication() {
    return this.apiService.get(`Requirement/GetCommunicationForddl`).pipe(map(response => {
      return response
    }));
  }
  GetBDE() {
    return this.apiService.get(`Requirement/GetBDE`).pipe(map(response => {
      return response
    }));
  }
  GetClients() {
    return this.apiService.get(`Requirement/GetClients`).pipe(map(response => {
      return response
    }));
  }
  GetRFP() {
    return this.apiService.rfp(`SMSWebAPI/RFP/GetActiveRFP`).pipe(map(response => {
      return response
    }));
  }
  GetEmployee() {
    return this.apiService.get(`Requirement/GetEmployees`).pipe(map(response => {
      return response
    }));
  }
  GetEmployees() {
    return this.apiService.get(`Requirement/GetAllEmployees`).pipe(map(response => {
      return response
    }));
  }
  GetSummary() {
    return this.apiService.get(`Requirement/StatusSummary`).pipe(map(response => {
      return response
    }));
  }
  getReport(obj: any): Observable<any> {
    return this.apiService.getData(`Report/GetReport`, obj).pipe(map(response => {
      return response
    }));
  }
  GetList(obj: any): Observable<any> {
    return this.apiService.GetList(`Requirement/GetRequirementListPage`, obj).pipe(map(response => {
      return response
    }));
  }
  GetOne(obj: any) {
    return this.apiService.getData(`Requirement/GetRequirementsById`, obj).pipe(map(response => {
      return response
    }));
  }
  Save(obj: any) {
    return this.apiService.post(`Requirement/Save`, obj).pipe(map(response => {
      return response
    }));
  }
}
//