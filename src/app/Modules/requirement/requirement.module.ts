import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequirementRoutingModule } from './requirement-routing.module';
import { CreateComponent } from './create/create.component';
import { RequirementReportComponent } from './requirement-report/requirement-report.component';
import { RequirementDashboardComponent } from './requirement-dashboard/requirement-dashboard.component';
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
import { UpdateComponent } from './update/update.component';
@NgModule({
  declarations: [
    CreateComponent,
    RequirementReportComponent,
    RequirementDashboardComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    RequirementRoutingModule,
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
    MatSortModule

  ]
})
export class RequirementModule { }
