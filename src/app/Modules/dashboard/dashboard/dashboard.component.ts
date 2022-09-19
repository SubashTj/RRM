import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DashboardService } from '../service/dashboard.service';
import { PaginationDTO, PaginationDTO5 } from 'src/app/shared/helpers/model/paginationDTO';
import { SelectionModel } from '@angular/cdk/collections';
import { constant } from 'src/app/core/helpers/global.helper';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['requirementId', 'requirementName', 'revenue', 'clientName', 'scheduled', 'conducted', 'requestDate', 'elapsedDays', 'onBoard', 'status'];

  dataSource5 = new MatTableDataSource<any>();
  paginationDTO5: PaginationDTO5 = new PaginationDTO5();
  pageSizeOptions: any = 0;
  start: number;
  draw: number;
  length: number;
  summary: any;
  details: any;
  @ViewChild('MatPaginator5') paginator5: MatPaginator;
  id: any;
  percentage: any;
  allemp: any;
  DateForm = new FormGroup({
    name: new FormControl(),
    start: new FormControl(new Date),
    end: new FormControl(new Date),
  })
  constructor(private router: Router, private dashboardService: DashboardService, private datePipe: DatePipe) {
    this.pageSizeOptions = constant().app.table.filtering.pageSizeOptions;
    this.paginationDTO5 = new PaginationDTO5();
    this.start = this.paginationDTO5.start5;
    this.draw = this.paginationDTO5.draw5;
    this.length = this.paginationDTO5.length5;

  }
  ngAfterViewInit() {
    this.dataSource5.paginator = this.paginator5;
  }
  ngOnInit(): void {
    this.GetSummary();
    this.GetImportant();
    this.GetRequirement();
    this.GetAllEmployee();
  }
  private refreshtable(actionType: any) {
    this.paginationDTO5.start5 = this.paginator5.pageSize;
    this.paginationDTO5.draw5 = this.paginator5.pageIndex;
    this.paginationDTO5.length5 = this.paginator5.pageSize;
    this.paginationDTO5.totalSize5 = this.paginator5.length;

    if (actionType == 'add') {
      this.paginationDTO5.draw5 = 1;
    }
    this.GetRequirement();
    this.paginator5.pageSize = this.paginationDTO5.start5;
    this.paginator5.pageIndex = this.paginationDTO5.draw5;
    this.paginator5.pageSize = this.paginationDTO5.length5;
    this.paginator5.length = this.paginationDTO5.totalSize5;
  }
  onPaginateChange(event: any) {
    this.draw = event.pageIndex;
    this.length = event.pageSize;
    this.start = (event.pageIndex * event.pageSize);
    this.GetRequirement();
  }
  onPaginateChange3(event: any) {
    this.draw = event.pageIndex;
    this.length = event.pageSize;
    this.start = (event.pageIndex * event.pageSize);
  }

  SelectId(event: any) {
    this.id = event.value;
  }
  GetAllEmployee() {
    this.dashboardService.GetEmployees().subscribe((data) => {
      this.allemp = data;
    })
  }
  GetInterview(data: any) {
    let obj = {
      'endDate': this.datePipe.transform((data.end), 'YYYY-MM-dd'),
      'recuriterId':data.name,
      'startDate': this.datePipe.transform((data.start), 'YYYY-MM-dd')
    }
    this.dashboardService.GetInterview(obj).subscribe((data) => {
      this.percentage = data;
    });
  }

  GetRequirement() {
    let obj = {
      'draw': this.draw,
      'columns[0][data]': 'Requirement_Id',
      'columns[0][name]': '',
      'columns[0][searchable]': true,
      'columns[0][orderable]': true,
      'columns[0][search][value]': '',
      'columns[0][search][regex]': false,
      'columns[1][data]': 'Requirement_Name',
      'columns[1][name]': '',
      'columns[1][searchable]': true,
      'columns[1][orderable]': true,
      'columns[1][search][value]': '',
      'columns[1][search][regex]': false,
      'columns[2][data]': 'Required_For',
      'columns[2][name]': '',
      'columns[2][searchable]': true,
      'columns[2][orderable]': true,
      'columns[2][search][value]': '',
      'columns[2][search][regex]': false,
      'columns[3][data]': 'Designation',
      'columns[3][name]': '',
      'columns[3][searchable]': true,
      'columns[3][orderable]': true,
      'columns[3][search][value]': '',
      'columns[3][search][regex]': false,
      'columns[4][data]': 'TechnicalSkills_Required',
      'columns[4][name]': '',
      'columns[4][searchable]': true,
      'columns[4][orderable]': true,
      'columns[4][search][value]': '',
      'columns[4][search][regex]': false,
      'columns[5][data]': 'Experience_Required',
      'columns[5][name]': '',
      'columns[5][searchable]': true,
      'columns[5][orderable]': true,
      'columns[5][search][value]': '',
      'columns[5][search][regex]': false,
      'columns[6][data]': 'CreatedOn',
      'columns[6][name]': '',
      'columns[6][searchable]': true,
      'columns[6][orderable]': true,
      'columns[6][search][value]': '',
      'columns[6][search][regex]': false,
      'columns[7][data]': 'REPORTEDDATE',
      'columns[7][name]': '',
      'columns[7][searchable]': true,
      'columns[7][orderable]': true,
      'columns[7][search][value]': '',
      'columns[7][search][regex]': false,
      'columns[8][data]': 'OnBoard',
      'columns[8][name]': '',
      'columns[8][searchable]': true,
      'columns[8][orderable]': true,
      'columns[8][search][value]': '',
      'columns[8][search][regex]': false,
      'columns[9][data]': 'Joiningstatus',
      'columns[9][name]': '',
      'columns[9][searchable]': true,
      'columns[9][orderable]': false,
      'columns[9][search][value]': '',
      'columns[9][search][regex]': false,
      'order[0][column]': 0,
      'order[0][dir]': 'desc',
      'start': this.start,
      'length': this.length,
      'search[value]': '',
      'search[regex]': false,
      'search[startDate]': '2020-09-13T17:32:53.929Z',
      'search[endDate]': '2022-09-13T17:32:53.929Z',
      'search[status]': 6
    }
    this.dashboardService.GetRequirement(obj).subscribe((res) => {
      this.paginationDTO5.totalSize5 = res.recordsTotal;
      this.paginationDTO5.start5 = res.data.length;
      this.dataSource5 = new MatTableDataSource<any>(res.data);
    })
  }


  GetSummary() {
    this.dashboardService.GetSummary().subscribe((data) => {
      this.summary = data;
    })
  }
  GetImportant() {
    this.dashboardService.GetImportant().subscribe((data) => {
      this.details = data;
    })
  }

}
