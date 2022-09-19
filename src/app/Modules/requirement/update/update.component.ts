import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RequirementService } from '../service/requirement.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
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
  id: any;
  requirement: Object;
  constructor(private fb: FormBuilder, private router: Router, private activateRoute: ActivatedRoute, private reuirementService: RequirementService) { }

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
    this.GetOne();
    this.GetDepartment();
    this.GetDesignation();
    this.GetCommunication();
    this.GetEmployee();
    this.GetAllEmployee();
    this.GetRFP();
    this.GetBDE();
    this.GetClients();
  }
  GetOne() {
    this.id = this.activateRoute.snapshot.params["id"];
    let obj = {
      'id': this.id
    }
    this.reuirementService.GetOne(obj).subscribe((data) => {
      this.requirement = data;
      this.setValues(this.requirement);
    })
  }
  setValues(item: any) {
    this.addForm.patchValue({
      requirementName: item.Requirement_Name,
      requiredFor: item.Required_For,
      IsReplacement: item.IsReplacement,
      IsLinkRFP: item.IsLinkRFP,
      replacementFor: item.ReplacementFor,
      rfpNumber: item.RFPNumber,
      noofPositions: item.NumberOfPositions,
      priority: item.Priority,
      DepartmentName: item.Department,
      Designation: item.Designation,
      experience: item.Experience_Required,
      communication: item.Communication_Required,
      Name: item.TechnicalSkills_Required,
      location: item.Location,
      skills: item.Skill_Details,
      comments: item.Comments,
      EmployeeICode: item.ReqLeads[0],
      recruiters: item.Recruiters[0],
      marketingLead: item.BDEs[0],
      duration: item.Duration,
      Interviewers: item.Interviewers,
      onboard: item.OnBoard,
      requestDate: item.REPORTEDDATE,
      keyword: item.Searchkeyword,
      Impid: item.Impid,
      ImpName: item.ImpName,

    })
  }
  GetDepartment() {
    this.reuirementService.GetDepartment().subscribe((data) => {
      this.department = data;
    })
  }
  GetDesignation() {
    this.reuirementService.GetDesignation().subscribe((data) => {
      this.designation = data;
    })
  }
  GetEmployee() {
    this.reuirementService.GetEmployee().subscribe((data) => {
      this.employees = data;
    })
  }
  GetAllEmployee() {
    this.reuirementService.GetEmployees().subscribe((data) => {
      this.allemp = data;
    })
  }
  GetCommunication() {
    this.reuirementService.GetCommunication().subscribe((data: any) => {
      this.communication = data.communication;
      this.prioritys = data.priorities;
      this.durations = data.duration;
      this.experience = data.experience;
      this.techskills = data.techskills
    })
  }
  GetRFP() {
    this.reuirementService.GetRFP().subscribe((data) => {
      this.rfp = data;
    })
  }
  GetBDE() {
    this.reuirementService.GetBDE().subscribe((data) => {
      this.bdes = data;
    })
  }
  GetClients() {
    this.reuirementService.GetClients().subscribe((data) => {
      this.clients = data;
    })
  }
  Update(post: any) {
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
    this.reuirementService.Save(obj).subscribe((data) => {

    })
    Swal.fire({
      icon: 'success',
      title: 'Success..',
      text: 'The Requirement Details Updated',

      showConfirmButton: false,
      timer: 1500
    })
  }
  Cancel() {
    this.router.navigate(['/requirement/overview'])
  }
}
