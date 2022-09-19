import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleInterviewRoutingModule } from './schedule-interview-routing.module';
import { CreateComponent } from './create/create.component';
import { InterviewListComponent } from './interview-list/interview-list.component';
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
import { MatDialogModule } from '@angular/material/dialog'
import { ExternalInterviewerComponent } from './external-interviewer/external-interviewer.component';
import { InterviewTypeComponent } from './interview-type/interview-type.component';
import { ScheduleHistoryComponent } from './schedule-history/schedule-history.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    CreateComponent,
    InterviewListComponent,
    ExternalInterviewerComponent,
    InterviewTypeComponent,
    ScheduleHistoryComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    ScheduleInterviewRoutingModule,
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
export class ScheduleInterviewModule { }
