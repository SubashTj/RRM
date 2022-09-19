import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HrStatusComponent } from './hr-status/hr-status.component';

const routes: Routes = [
  {
    path:'',
    component:HrStatusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrStatusRoutingModule { }
