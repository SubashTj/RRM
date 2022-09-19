import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { RequirementService } from '../service/requirement.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  addForm: FormGroup;
  submitted = false;
  isShown = false;
  department: any;
  designation: any;
  communication: any;
  prioritys: any;
  durations: any;
  experience: any;
  techskills: any;
  employees: any;
  allemp: any;
  rfp: any;
  bdes: any;
  clients: any;
  ReqLeads: any = [];
  Recruiters: any = [];
  Interviewers: any = [];
  BDEs: any = [];
  constructor(private fb: FormBuilder, private router: Router, private requirementService: RequirementService) { }

  ngOnInit(): void {
    this.addForm = this.fb.group({
      requirementName: new FormControl('', [Validators.required]),
      noofPositions: new FormControl('', [Validators.required]),
      DepartmentName: new FormControl('', [Validators.required]),
      experience: new FormControl('', [Validators.required]),
      Name: new FormControl('', [Validators.required]),
      skills: new FormControl('', [Validators.required]),
      Interviewers: new FormControl('', [Validators.required]),
      recruiters: new FormControl('', [Validators.required]),
      duration: new FormControl('', [Validators.required]),
      requiredFor: new FormControl('', [Validators.required]),
      replacementFor: new FormControl('', [Validators.required]),
      rfpNumber: new FormControl('', [Validators.required]),
      priority: new FormControl('', [Validators.required]),
      Designation: new FormControl('', [Validators.required]),
      communication: new FormControl('', [Validators.required]),
      Id: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      comments: new FormControl('', [Validators.required]),
      marketingLead: new FormControl('', [Validators.required]),
      keyword: new FormControl('', [Validators.required]),
      planb: new FormControl('', [Validators.required]),
      planc: new FormControl('', [Validators.required]),
      requestDate: new FormControl('', [Validators.required]),
      onboard: new FormControl('', [Validators.required]),
      EmployeeICode: new FormControl('', [Validators.required]),
      IsReplacement: new FormControl('', [Validators.required]),
      IsLinkRFP: new FormControl('', [Validators.required]),
      Impid: new FormControl('', [Validators.required]),
      ImpName: new FormControl('', [Validators.required]),
    });
    this.GetDepartment();
    this.GetDesignation();
    this.GetCommunication();
    this.GetEmployee();
    this.GetAllEmployee();
    this.GetRFP();
    this.GetBDE();
    this.GetClients();
  }
  GetDepartment() {
    this.requirementService.GetDepartment().subscribe((data) => {
      this.department = data;
    })
  }
  GetDesignation() {
    this.requirementService.GetDesignation().subscribe((data) => {
      this.designation = data;
    })
  }
  GetEmployee() {
    this.requirementService.GetEmployee().subscribe((data) => {
      this.employees = data;
    })
  }
  GetAllEmployee() {
    this.requirementService.GetEmployees().subscribe((data) => {
      this.allemp = data;
    })
  }
  GetCommunication() {
    this.requirementService.GetCommunication().subscribe((data: any) => {
      this.communication = data.communication;
      this.prioritys = data.priorities;
      this.durations = data.duration;
      this.experience = data.experience;
      this.techskills = data.techskills
    })
  }
  GetRFP() {
    this.requirementService.GetRFP().subscribe((data) => {
      this.rfp = data;
    })
  }
  GetBDE() {
    this.requirementService.GetBDE().subscribe((data) => {
      this.bdes = data;
    })
  }
  GetClients() {
    this.requirementService.GetClients().subscribe((data) => {
      this.clients = data;
    })
  }
  Cancel() {
    Swal.fire({
      icon: 'info',
      title: 'Canceld!',
    })
    this.router.navigate(['/requirement/overview'])
  }
  Clear() {
    this.addForm.reset();
  }
  Save(post: any) {
    this.BDEs.push(post.rfpNumber);
    this.Interviewers.push(post.Interviewers);
    this.ReqLeads.push(post.recruiters);
    this.Recruiters.push(post.EmployeeICode);
    let obj = {
      'BDEs': this.BDEs,
      'Interviewers': this.Interviewers,
      'ReqLeads': this.ReqLeads,
      'Recruiters': this.Recruiters,
      'Comments': post.comments,
      'Communication_Required': this.prioritys.communication,
      'CreatedOn': "2022-09-12T14:07:59.026Z",
      'CurrentStatus': 7,
      'Department': post.Department,
      'Designation': post.Designation,
      'Duration': post.duration,
      'Experience_Required': post.experience,
      'ImpName': "1",
      'Impid': 0,
      'IsActive': 1,
      'IsLinkRFP': post.IsLinkRFP,
      'IsReplacement': post.IsReplacement,
      'Location': post.location,
      'NumberOfPositions': post.noofPositions,
      'OnBoard': post.onboard,
      'Priority': post.priority,
      'ReplacementFor': post.replacementFor,
      'Required_For': post.replacementFor,
      'Requirement_Name': post.requirementName,
      'Searchkeyword': post.keyword,
      'Skill_Details': post.skills,
      'Skill_Details_PlanB': post.planb,
      'Skill_Details_PlanC': post.postc,
      'TechnicalSkills_Required': post.Name
    }
    this.requirementService.Save(obj).subscribe((data) => {

    })
    Swal.fire({
      icon: 'success',
      title: 'Success..',
      text: 'The Requirement Details Saved',

      showConfirmButton: false,
      timer: 1500
    })
  }
}


