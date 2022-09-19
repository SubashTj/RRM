import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AppDateAdapter, APP_DATE_FORMATS } from 'src/app/shared/helpers/format-datepicker';
import { AppServerDatePipe } from 'src/app/shared/pipes/app-config.pipe';
import Swal from 'sweetalert2';
import { Deviation } from '../model/deviation.model';
import { DeviationService } from '../service/deviation.service';
import { DatePipe } from '@angular/common';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'YYYY/MM/DD',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
}
@Component({
  selector: 'app-deviation-report',
  templateUrl: './deviation-report.component.html',
  styleUrls: ['./deviation-report.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],

})
export class DeviationReportComponent implements OnInit {
  displayedColumns: string[] = ['Requirement_Id', 'Requirement_Name', 'Required_For', 'Designation', 'Department', 'TechnicalSkills_Required', 'Requested_date', 'Required_date', 'current_status', 'Joined_Date', 'days_taken', 'days_can_be_taken', 'deviation'];
  dataSource = new MatTableDataSource<Deviation>();
  searchForm: FormGroup;
  @ViewChild('paginator') paginator: MatPaginator;
  isShown = false;
  date: any;
  startDate: any;
  endDate: any;
  data: any;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(private fb: FormBuilder, private dService: DeviationService, private datePipe: DatePipe) {
    this.searchForm = this.fb.group({
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }
  Show(searchForm: any) {
    console.log(this.date)
    this.startDate = this.datePipe.transform((searchForm.startDate), 'dd/MM/YYYY');
    this.endDate = this.datePipe.transform((searchForm.endDate), 'dd/MM/YYYY');
    let obj = {
      'date': this.startDate + "-" + this.endDate
    }
    this.dService.getDeviation(obj).subscribe((data) => {
      this.dataSource = new MatTableDataSource<Deviation>(data);
      !this.dataSource.paginator ? this.dataSource.paginator = this.paginator : null;
      if(data.length!=0){
      this.isShown = !this.isShown;
      const Toast = Swal.mixin({
        toast: true,
        position: 'bottom',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      })

      Toast.fire({
        icon: 'success',
        title: 'Data show successfully'
      })
    }else{
      const Toast = Swal.mixin({
        toast: true,
        position: 'bottom',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      })

      Toast.fire({
        icon: 'success',
        title: 'No Data Found'
      })
    }
    })
  
  }
}
