import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { constant } from 'src/app/core/helpers/global.helper';
import { PaginationDTO4 } from 'src/app/shared/helpers/model/paginationDTO';
import { DashboardService } from '../service/dashboard.service';

@Component({
  selector: 'app-co',
  templateUrl: './co.component.html',
  styleUrls: ['./co.component.scss']
})
export class CoComponent implements OnInit {
  displayedColumns: string[] = ['requirementId', 'requirementName', 'revenue', 'clientName', 'requestDate', 'joiningStatus'];
  dataSource4 = new MatTableDataSource<any>();
  paginationDTO4: PaginationDTO4 = new PaginationDTO4();
  @ViewChild('MatPaginator4') paginator4: MatPaginator;
  pageSizeOptions: any = 0;
  start: number;
  draw: number;
  length: number;
  constructor(private dashboardService: DashboardService) {
    this.pageSizeOptions = constant().app.table.filtering.pageSizeOptions;
    this.paginationDTO4 = new PaginationDTO4();
    this.start = this.paginationDTO4.start4;
    this.draw = this.paginationDTO4.draw4;
    this.length = this.paginationDTO4.length4;
  }


  ngOnInit(): void {
    this.GetConsultant();
  }
  ngAfterViewInit() {
    this.dataSource4.paginator = this.paginator4;
  }
  private refreshtable(actionType: any) {
    this.paginationDTO4.start4 = this.paginator4.pageSize;
    this.paginationDTO4.draw4 = this.paginator4.pageIndex;
    this.paginationDTO4.length4 = this.paginator4.pageSize;
    this.paginationDTO4.totalSize4 = this.paginator4.length;

    if (actionType == 'add') {
      this.paginationDTO4.draw4 = 1;
    }
    this.GetConsultant();
    this.paginator4.pageSize = this.paginationDTO4.start4
    this.paginator4.pageIndex = this.paginationDTO4.draw4;
    this.paginator4.pageSize = this.paginationDTO4.length4;
    this.paginator4.length = this.paginationDTO4.totalSize4;
  }
  onPaginateChange(event: any) {
    this.draw = event.pageIndex;
    this.length = event.pageSize;
    this.start = (event.pageIndex * event.pageSize);
    this.GetConsultant();
  }
  GetConsultant() {
    let obj = {
      'draw': this.draw,
      'columns[0][data]': 'Recruiter',
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
      'columns[3][data]': 'CreatedOn',
      'columns[3][name]': '',
      'columns[3][searchable]': true,
      'columns[3][orderable]': true,
      'columns[3][search][value]': '',
      'columns[3][search][regex]': false,
      'columns[4][data]': 'ProfileSubmittedDate',
      'columns[4][name]': '',
      'columns[4][searchable]': true,
      'columns[4][orderable]': true,
      'columns[4][search][value]': '',
      'columns[4][search][regex]': false,
      'columns[5][data]': 'Joiningstatus',
      'columns[5][name]': '',
      'columns[5][searchable]': true,
      'columns[5][orderable]': true,
      'columns[5][search][value]': '',
      'columns[5][search][regex]': false,
      'order[0][column]': 3,
      'order[0][dir]': 'desc',
      'start': this.start,
      'length': this.length,
      'search[value]': '',
      'search[regex]': false
    }
    this.dashboardService.GetConsultant(obj).subscribe((res) => {
      this.paginationDTO4.totalSize4 = res.recordsTotal;
      this.paginationDTO4.start4 = res.data.length;
      this.dataSource4 = new MatTableDataSource<any>(res.data);
    })
  }
}
