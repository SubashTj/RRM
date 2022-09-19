import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ExternalInterviewerComponent } from '../external-interviewer/external-interviewer.component';
import { InterviewTypeComponent } from '../interview-type/interview-type.component';
import { ScheduleService } from '../service/schedule.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  addForm: FormGroup;
  submitted = false;
  isShown = false;
  requirements: any;
  interviwetype: any;
  employees: any;
  skills: any;
  Requirement_Id: any;
  desc: any;
  id: any;
  schedule: any;
  constructor(private fb: FormBuilder, private router: Router, private dialog: MatDialog, private scheduleService: ScheduleService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.addForm = this.fb.group({
      Id: new FormControl('', [Validators.required]),
      CandidateName: new FormControl('', [Validators.required]),
      PhoneNumber: new FormControl('', [Validators.required]),
      AlternatePhoneNumber: new FormControl('', [Validators.required]),
      Description: new FormControl('', [Validators.required]),
      SkillDetailsPlan: new FormControl('', [Validators.required]),
      resume: new FormControl(''),
      RequirementId: new FormControl('', [Validators.required]),
      EmailId: new FormControl('', [Validators.required]),
      Date: new FormControl('', [Validators.required]),
      AssignedTo: new FormControl('', [Validators.required]),
      InterviewTypeId: new FormControl('', [Validators.required]),
      SkillPlanDescription: new FormControl('', [Validators.required]),
      EmailLoop: new FormControl('', [Validators.required]),
    });
    this.GetRequirement();
    this.GetInterviewType();
    this.GetAllEmployeeExternal();
    this.GetOne();
  }
  GetRequirement() {
    this.scheduleService.GetRequirement().subscribe((data) => {
      this.requirements = data
    })
  }
  GetInterviewType() {
    this.scheduleService.GetInterviewType().subscribe((data) => {
      this.interviwetype = data
    })
  }
  GetAllEmployeeExternal() {
    this.scheduleService.GetAllEmployeeExternal().subscribe((data) => {
      this.employees = data
    })
  }
  onSelectChange(select: any, tech: any) {
    this.Requirement_Id = tech.Requirement_Id
    let obj = {
      'requirementid': tech.Requirement_Id
    }
    this.scheduleService.GetSkill(obj).subscribe((data) => {
      this.skills = data
    })
  }
  onSelect(select: any, skill: any) {
    let obj = {
      'planType': skill,
      'requirementid': this.Requirement_Id
    }
    this.scheduleService.GetSkillDes(obj).subscribe((data) => {
      this.desc = data
      this.addForm.patchValue({
        SkillPlanDescription: this.desc
      })
    })
  }
  GetOne() {
    this.id = this.activateRoute.snapshot.params["id"];
    let obj = {
      'id': this.id
    }
    this.scheduleService.GetOne(obj).subscribe((data: any) => {
      this.schedule = data[0];
      this.setValues(this.schedule);
    })
  }
  setValues(item: any) {
    this.addForm.patchValue({
      Id:item.Id,
      CandidateName: item.CandidateName,
      PhoneNumber: item.PhoneNumber,
      AlternatePhoneNumber: item.AlternatePhoneNumber,
      Description: item.Description,
      SkillDetailsPlan: item.SkillDetailsPlan,
      RequirementId: item.RequirementId,
      EmailId: item.EmailId,
      Date: item.Date,
      AssignedTo: item.AssignedTo,
      InterviewTypeId: item.InterviewTypeId,
      SkillPlanDescription: item.SkillPlanDescription,
      EmailLoop: item.EmailLoop
    })
  }
  Update(post: any) {
    this.scheduleService.Save(post).subscribe((data) => {

    })
    Swal.fire({
      icon: 'success',
      title: 'Success..',
      text: 'The Schedule-Interview Details Updated',

      showConfirmButton: false,
      timer: 1500
    })
  }
  Cancel() {
    Swal.fire({
      icon: 'info',
      title: 'Canceld!',
    })
    this.router.navigate(['/schedule-interview/schedule-interview'])
  }
  Clear() {
    this.addForm.reset();
  }
  addInterviewer() {
    const dialogRef = this.dialog.open(ExternalInterviewerComponent, {
      disableClose: true
    })
  }
  interviewType() {
    const dialogRef = this.dialog.open(InterviewTypeComponent, {
      disableClose: true
    })
  }
}
