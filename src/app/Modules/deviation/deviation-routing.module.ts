import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviationReportComponent } from './deviation-report/deviation-report.component';

const routes: Routes = [
  {
    path:'',
    component:DeviationReportComponent
  },
  {
    path:'deviation',
    component:DeviationReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviationRoutingModule { }
