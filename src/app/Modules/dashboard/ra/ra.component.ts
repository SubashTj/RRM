import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { constant } from 'src/app/core/helpers/global.helper';
import { PaginationDTO3 } from 'src/app/shared/helpers/model/paginationDTO';
import { DashboardService } from '../service/dashboard.service';

@Component({
  selector: 'app-ra',
  templateUrl: './ra.component.html',
  styleUrls: ['./ra.component.scss']
})
export class RaComponent implements OnInit {
  displayedColumns: string[] = ['requirementId', 'requirementName', 'revenue', 'clientName', 'scheduled', 'conducted', 'requestDate', 'elapsedDays', 'onBoard', 'status'];

  dataSource3 = new MatTableDataSource<any>();
  paginationDTO3: PaginationDTO3 = new PaginationDTO3();
  selection = new SelectionModel<any>(true, []);
  @ViewChild('MatPaginator3') paginator3: MatPaginator;
  pageSizeOptions: any = 0;
  start: number;
  draw: number;
  length: number;
  constructor(private dashboardService: DashboardService) {
    this.pageSizeOptions = constant().app.table.filtering.pageSizeOptions;
    this.paginationDTO3 = new PaginationDTO3();
    this.start = this.paginationDTO3.start3;
    this.draw = this.paginationDTO3.draw3;
    this.length = this.paginationDTO3.length3;
  }
  ngOnInit(): void {
    this.GetAssignedRequirement();
  }
  ngAfterViewInit() {
    this.dataSource3.paginator = this.paginator3;
  }
  private refreshtable(actionType: any) {
    this.paginationDTO3.start3 = this.paginator3.pageSize;
    this.paginationDTO3.draw3 = this.paginator3.pageIndex;
    this.paginationDTO3.length3 = this.paginator3.pageSize;
    this.paginationDTO3.totalSize3 = this.paginator3.length;

    if (actionType == 'add') {
      this.paginationDTO3.draw3 = 1;
    }
    this.GetAssignedRequirement();
    this.paginator3.pageSize = this.paginationDTO3.start3;
    this.paginator3.pageIndex = this.paginationDTO3.draw3;
    this.paginator3.pageSize = this.paginationDTO3.length3;
    this.paginator3.length = this.paginationDTO3.totalSize3;
  }
  onPaginateChange(event: any) {
    this.draw = event.pageIndex;
    this.length = event.pageSize;
    this.start = (event.pageIndex * event.pageSize);
    this.GetAssignedRequirement();
  }
  GetAssignedRequirement() {
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
      'columns[7][data]': 'ElapsedDate',
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
      'search[regex]': false
    }
    this.dashboardService.GetAssignedRequirement(obj).subscribe((res) => {
      this.paginationDTO3.totalSize3 = res.recordsTotal;
      this.paginationDTO3.start3 = res.data.length;
      this.dataSource3 = new MatTableDataSource<any>(res.data);
    })
  }
}
