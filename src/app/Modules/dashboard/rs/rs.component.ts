import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { constant } from 'src/app/core/helpers/global.helper';
import { PaginationDTO2 } from 'src/app/shared/helpers/model/paginationDTO';
import { DashboardService } from '../service/dashboard.service';

@Component({
  selector: 'app-rs',
  templateUrl: './rs.component.html',
  styleUrls: ['./rs.component.scss']
})
export class RsComponent implements OnInit {
  displayedColumns: string[] = ['requirementId', 'requirementName', 'revenue', 'clientName', 'scheduled', 'conducted', 'requestDate', 'elapsedDays', 'onBoard', 'status', 'joiningStatus'];
  dataSource2 = new MatTableDataSource<any>();
  paginationDTO2: PaginationDTO2 = new PaginationDTO2();
  pageSizeOptions: any = 0;
  start: number;
  draw: number;
  length: number;
  @ViewChild('MatPaginator2') paginator2: MatPaginator;
  id: any;
  percentage: any;
  allemp: any;

  constructor(private dashboardService: DashboardService) {
    this.pageSizeOptions = constant().app.table.filtering.pageSizeOptions;
    this.paginationDTO2 = new PaginationDTO2();
    this.start = this.paginationDTO2.start2;
    this.draw = this.paginationDTO2.draw2;
    this.length = this.paginationDTO2.length2;

  }
  ngAfterViewInit() {
    this.dataSource2.paginator = this.paginator2;
  }
  ngOnInit(): void {
    this.GetRequirementStatus();
  }
  private refreshtable(actionType: any) {
    this.paginationDTO2.start2 = this.paginator2.pageSize;
    this.paginationDTO2.draw2 = this.paginator2.pageIndex;
    this.paginationDTO2.length2 = this.paginator2.pageSize;
    this.paginationDTO2.totalSize2 = this.paginator2.length;

    if (actionType == 'add') {
      this.paginationDTO2.draw2 = 1;
    }
    this.GetRequirementStatus();
    this.paginator2.pageSize = this.paginationDTO2.start2;
    this.paginator2.pageIndex = this.paginationDTO2.draw2;
    this.paginator2.pageSize = this.paginationDTO2.length2;
    this.paginator2.length = this.paginationDTO2.totalSize2;
  }
  onPaginateChange(event: any) {
    this.draw = event.pageIndex;
    this.length = event.pageSize;
    this.start = (event.pageIndex * event.pageSize);
    this.GetRequirementStatus();
  }
  GetRequirementStatus() {
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
      'columns[3][data]': 'NumberOfPositions',
      'columns[3][name]': '',
      'columns[3][searchable]': true,
      'columns[3][orderable]': true,
      'columns[3][search][value]': '',
      'columns[3][search][regex]': false,
      'columns[4][data]': 'CreatedOn',
      'columns[4][name]': '',
      'columns[4][searchable]': true,
      'columns[4][orderable]': true,
      'columns[4][search][value]': '',
      'columns[4][search][regex]': false,
      'columns[5][data]': 'Inprogress',
      'columns[5][name]': '',
      'columns[5][searchable]': true,
      'columns[5][orderable]': true,
      'columns[5][search][value]': '',
      'columns[5][search][regex]': false,
      'columns[6][data]': 'Hold',
      'columns[6][name]': '',
      'columns[6][searchable]': true,
      'columns[6][orderable]': true,
      'columns[6][search][value]': '',
      'columns[6][search][regex]': false,
      'columns[7][data]': 'Cycb',
      'columns[7][name]': '',
      'columns[7][searchable]': true,
      'columns[7][orderable]': true,
      'columns[7][search][value]': '',
      'columns[7][search][regex]': false,
      'columns[8][data]': 'Confirmed',
      'columns[8][name]': '',
      'columns[8][searchable]': true,
      'columns[8][orderable]': true,
      'columns[8][search][value]': '',
      'columns[8][search][regex]': false,
      'columns[9][data]': 'ProfileSubmittedon',
      'columns[9][name]': '',
      'columns[9][searchable]': true,
      'columns[9][orderable]': true,
      'columns[9][search][value]': '',
      'columns[9][search][regex]': false,
      'columns[10][data]': 'Joiningstatus',
      'columns[10][name]': '',
      'columns[10][searchable]': true,
      'columns[10][orderable]': true,
      'columns[10][search][value]': '',
      'columns[10][search][regex]': false,
      'order[0][column]': 4,
      'order[0][dir]': 'desc',
      'start': this.start,
      'length': this.length,
      'search[value]': '',
      'search[regex]': false
    }
    this.dashboardService.GetRequirementStatus(obj).subscribe((res) => {
      this.paginationDTO2.totalSize2 = res.recordsTotal;
      this.paginationDTO2.start2 = res.data.length;
      this.dataSource2 = new MatTableDataSource<any>(res.data);
    })
  }
}
