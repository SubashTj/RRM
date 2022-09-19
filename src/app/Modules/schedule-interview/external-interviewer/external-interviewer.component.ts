import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ScheduleService } from '../service/schedule.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-external-interviewer',
  templateUrl: './external-interviewer.component.html',
  styleUrls: ['./external-interviewer.component.scss']
})
export class ExternalInterviewerComponent implements OnInit {
  addForm: FormGroup;
  constructor(private fb: FormBuilder, private scheduleService: ScheduleService, private dialogRef: MatDialogRef<ExternalInterviewerComponent>, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.addForm = this.fb.group({
      emailId: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
    })
  }
  Save(post: any) {
    this.scheduleService.SaveExternal(post).subscribe((data) => {

    })
    Swal.fire({
      icon: 'success',
      title: 'Success..',
      text: 'The External Interviewer Details Saved',

      showConfirmButton: false,
      timer: 1500
    })
  }
  Close() {
    this.dialogRef.close();
  }
}
