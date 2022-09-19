import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { InterviewQuestionService } from '../service/interview-question.service';
@Component({
  selector: 'app-question-update',
  templateUrl: './question-update.component.html',
  styleUrls: ['./question-update.component.scss']
})
export class QuestionUpdateComponent implements OnInit {
  addForm: FormGroup;
  technology: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, private dialogRef: MatDialogRef<QuestionUpdateComponent>, private dialog: MatDialog, private interviewqService: InterviewQuestionService) { }

  ngOnInit(): void {
    this.retriveForm(this.data.payload);
    this.getTechnology();
  }
  retriveForm(item: any) {
    console.log(item)
    this.addForm = this.formBuilder.group({
      Id: [item.Id || '', [Validators.required]],
      Technology_Id: [item.Technology_Id || '', [Validators.required]],
      TechnologyName: [item.technologies.Technology_Name || '', [Validators.required]],
      questions: [item.questions || '', [Validators.required]],
    })
  }

  getTechnology() {
    this.interviewqService.getIQ().subscribe((data) => {
      this.technology = data
    })
  }
  Update(addForm: any) {
    let obj = {
      'Id': addForm.value.Id,
      'Technology_Id': addForm.value.Technology_Id,
      'Technology_Name': addForm.value.TechnologyName,
      'questions': addForm.value.questions
    }
    console.log(obj);
    this.interviewqService.SaveIQ(obj).subscribe((data) => {

    })
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    })

    Toast.fire({
      icon: 'success',
      title: 'Question edited successfully'
    })
    this.addForm.reset();
  }
  Close() {
    this.dialogRef.close();
  }
}
