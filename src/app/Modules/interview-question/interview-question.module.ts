import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterviewQuestionRoutingModule } from './interview-question-routing.module';
import { InterviewQuestionComponent } from './interview-question/interview-question.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { QuestionCreateComponent } from './question-create/question-create.component';
import { QuestionUpdateComponent } from './question-update/question-update.component';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    InterviewQuestionComponent,
    QuestionCreateComponent,
    QuestionUpdateComponent
  ],
  imports: [
    CommonModule,
    InterviewQuestionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatProgressBarModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule
  ]
})
export class InterviewQuestionModule { }
