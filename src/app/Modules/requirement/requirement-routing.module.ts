import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { RequirementDashboardComponent } from './requirement-dashboard/requirement-dashboard.component';
import { RequirementReportComponent } from './requirement-report/requirement-report.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path: 'overview',
    component: RequirementDashboardComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'report',
    component: RequirementReportComponent
  },
  {
    path: 'update/:id',
    component: UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequirementRoutingModule { }
