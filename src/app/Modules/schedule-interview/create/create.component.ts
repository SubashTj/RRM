import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ExternalInterviewerComponent } from '../external-interviewer/external-interviewer.component';
import { InterviewTypeComponent } from '../interview-type/interview-type.component';
import Swal from 'sweetalert2';
import { ScheduleService } from '../service/schedule.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  addForm: FormGroup;
  submitted = false;
  isShown = false;
  requirements: any;
  interviwetype: any;
  employees: any;
  skills: any;
  Requirement_Id: any;
  desc: any;
  constructor(private fb: FormBuilder, private router: Router, private dialog: MatDialog, private scheduleService: ScheduleService) { }

  ngOnInit(): void {
    this.addForm = this.fb.group({
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
  Save(post: any) {
    this.scheduleService.Save(post).subscribe((data) => {

    })
    Swal.fire({
      icon: 'success',
      title: 'Success..',
      text: 'The Schedule-Interview Details Saved',

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
