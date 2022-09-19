import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HrStatusService } from '../service/hr-status.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { DatePipe } from '@angular/common';
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
  selector: 'app-hr-status',
  templateUrl: './hr-status.component.html',
  styleUrls: ['./hr-status.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],

})

export class HrStatusComponent implements OnInit {
  displayedColumns: string[] = ['requirementId', 'requirementName', 'requiredFor', 'designation', 'department', 'techSkill', 'requestedDate', 'requiredDate', 'status', 'joinDate', 'daysTaken', 'taken', 'deviation'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  isShown = false;
  employees: any
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(private fb: FormBuilder, private hrService: HrStatusService, private datePipe: DatePipe) { }
  searchForm: FormGroup;
  ngOnInit(): void {
    this.searchForm = this.fb.group({
      recruiterId: new FormControl('', [Validators.required]),
      date: new FormControl(new Date()),
    })
    this.getEmployees();
  }
  getEmployees() {

    this.hrService.getEmployees().subscribe((data) => {
      this.employees = data;
    });
  }
  Show(searchForm: any) {
    let obj = {
      'recruiterId': searchForm.recruiterId,
      'date': this.datePipe.transform(searchForm.date, 'YYYY/MM/dd')
    }
    this.hrService.getStatus(obj).subscribe((data) => {
      this.dataSource = new MatTableDataSource<any>(data);
      if (data?.length != 0) {
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
      } else {
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
  Clear() {
    this.searchForm.reset();
  }
}
