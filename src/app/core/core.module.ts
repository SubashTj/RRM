import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { serviceProvider } from './services/service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [serviceProvider]
})
export class CoreModule { }
