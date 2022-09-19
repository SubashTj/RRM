import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterviewQuestionComponent } from './interview-question/interview-question.component';

const routes: Routes = [
  {
    path:'',
    component:InterviewQuestionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterviewQuestionRoutingModule { }
