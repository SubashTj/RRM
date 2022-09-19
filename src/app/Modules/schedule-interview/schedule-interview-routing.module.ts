import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { InterviewListComponent } from './interview-list/interview-list.component';
import { ScheduleHistoryComponent } from './schedule-history/schedule-history.component';

const routes: Routes = [
  {
    path: 'schedule-interview',
    component: InterviewListComponent
  },
  {
    path: 'create-interview',
    component: CreateComponent
  },
  {
    path: 'update-interview/:id',
    component: EditComponent
  },
  {
    path: 'view/:id',
    component: ScheduleHistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleInterviewRoutingModule { }
