import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/services/auth-guard.service';
import { AuthLayoutComponent } from './shared/components/Layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './shared/components/Layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () => import("./Modules/login/login.module").then((m) => m.LoginModule)
      }
    ]
  },
  {
    path: "",
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "dashboard",
        loadChildren: () => import("./Modules/dashboard/dashboard.module").then((m) => m.DashboardModule)
      },
      {
        path: "requirement",
        loadChildren: () => import("./Modules/requirement/requirement.module").then((m) => m.RequirementModule)
      },
      {
        path: "deviation",
        loadChildren: () => import("./Modules/deviation/deviation.module").then((m) => m.DeviationModule)
      },
      {
        path: "schedule-interview",
        loadChildren: () => import("./Modules/schedule-interview/schedule-interview.module").then((m) => m.ScheduleInterviewModule)
      },
      {
        path: "interview-question",
        loadChildren: () => import("./Modules/interview-question/interview-question.module").then((m) => m.InterviewQuestionModule)
      },
      {
        path: "daily-status",
        loadChildren: () => import("./Modules/hr-status/hr-status.module").then((m) => m.HrStatusModule)
      },
      {
        path: "technology",
        loadChildren: () => import("./Modules/technology/technology.module").then((m) => m.TechnologyModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
