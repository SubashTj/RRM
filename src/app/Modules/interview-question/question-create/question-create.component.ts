import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { InterviewQuestionService } from '../service/interview-question.service';
@Component({
  selector: 'app-question-create',
  templateUrl: './question-create.component.html',
  styleUrls: ['./question-create.component.scss']
})
export class QuestionCreateComponent implements OnInit {
  addForm: FormGroup;
  technology: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, private dialogRef: MatDialogRef<QuestionCreateComponent>, private dialog: MatDialog, private interviewqService: InterviewQuestionService) { }

  ngOnInit(): void {
    this.retriveForm(this.data.payload);
    this.getTechnology();
  }
  retriveForm(item: any) {
    this.addForm = this.formBuilder.group({
      TechnologyId: [item.TechnologyId || '', [Validators.required]],
      TechnologyName: [item.TechnologyName || '', [Validators.required]],
      questions: [item.questions || '', [Validators.required]],
    })
  }
  getTechnology() {
    this.interviewqService.getIQ().subscribe((data) => {
      this.technology = data
    })
  }
  Save(addForm: any) {
    let obj = {
      'Technology_Id': addForm.value.TechnologyId,
      'Technology_Name': addForm.value.TechnologyName,
      'questions': addForm.value.questions
    }
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
      title: 'Question created successfully'
    })
    this.addForm.reset();
  }
  Close() {
    this.dialogRef.close();
  }
}
