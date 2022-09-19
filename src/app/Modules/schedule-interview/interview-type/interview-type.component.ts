import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ScheduleService } from '../service/schedule.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-interview-type',
  templateUrl: './interview-type.component.html',
  styleUrls: ['./interview-type.component.scss']
})
export class InterviewTypeComponent implements OnInit {
  addForm: FormGroup;
  constructor(private fb: FormBuilder, private scheduleService: ScheduleService, private dialogRef: MatDialogRef<InterviewTypeComponent>, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.addForm = this.fb.group({
      InterviewType: new FormControl('', [Validators.required]),
    })
  }
  Save(post: any) {
    this.scheduleService.SaveInterviewType(post).subscribe((data) => {

    })
    Swal.fire({
      icon: 'success',
      title: 'Success..',
      text: 'The Interview Type Saved',

      showConfirmButton: false,
      timer: 1500
    })
  }
  Close() {
    this.dialogRef.close();
  }
}
