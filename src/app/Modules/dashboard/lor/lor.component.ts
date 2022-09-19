import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { constant } from 'src/app/core/helpers/global.helper';
import { PaginationDTO1 } from 'src/app/shared/helpers/model/paginationDTO';
import { DashboardService } from '../service/dashboard.service';

@Component({
  selector: 'app-lor',
  templateUrl: './lor.component.html',
  styleUrls: ['./lor.component.scss']
})
export class LorComponent implements OnInit {
  displayedColumns: string[] = ['requirementId', 'requirementName', 'revenue', 'clientName', 'scheduled', 'conducted'];
  dataSource1 = new MatTableDataSource<any>();
  paginationDTO1: PaginationDTO1 = new PaginationDTO1();
  @ViewChild('MatPaginator1') paginator1: MatPaginator;
  pageSizeOptions: any = 0;
  start1: number;
  draw1: number;
  length1: number;
  constructor(private dashboardService: DashboardService) {
    this.pageSizeOptions = constant().app.table.filtering.pageSizeOptions;
    this.paginationDTO1 = new PaginationDTO1();
    this.start1 = this.paginationDTO1.start1;
    this.draw1 = this.paginationDTO1.draw1;
    this.length1 = this.paginationDTO1.length1;
  }


  ngOnInit(): void {
    this.GetOpenRequirement();
  }
  ngAfterViewInit() {
    this.dataSource1.paginator = this.paginator1;
  }
  private refreshtable(actionType: any) {
    this.paginationDTO1.start1 = this.paginator1.pageSize;
    this.paginationDTO1.draw1 = this.paginator1.pageIndex;
    this.paginationDTO1.length1 = this.paginator1.pageSize;
    this.paginationDTO1.totalSize1 = this.paginator1.length;

    if (actionType == 'add') {
      this.paginationDTO1.draw1 = 1;
    }
    this.GetOpenRequirement();
    this.paginator1.pageSize = this.paginationDTO1.start1;
    this.paginator1.pageIndex = this.paginationDTO1.draw1;
    this.paginator1.pageSize = this.paginationDTO1.length1;
    this.paginator1.length = this.paginationDTO1.totalSize1;
  }
  onPaginateChange(event: any) {
    this.draw1 = event.pageIndex;
    this.length1 = event.pageSize;
    this.start1 = (event.pageIndex * event.pageSize);
    this.GetOpenRequirement();
  }
  GetOpenRequirement() {
    let obj = {
      'draw': this.draw1,
      'columns[0][data]': 'Department',
      'columns[0][name]': '',
      'columns[0][searchable]': true,
      'columns[0][orderable]': true,
      'columns[0][search][value]': '',
      'columns[0][search][regex]': false,
      'columns[1][data]': 'G60',
      'columns[1][name]': '',
      'columns[1][searchable]': true,
      'columns[1][orderable]': false,
      'columns[1][search][value]': '',
      'columns[1][search][regex]': false,
      'columns[2][data]': 'B45To60',
      'columns[2][name]': '',
      'columns[2][searchable]': true,
      'columns[2][orderable]': false,
      'columns[2][search][value]': '',
      'columns[2][search][regex]': false,
      'columns[3][data]': 'B30To45',
      'columns[3][name]': '',
      'columns[3][searchable]': true,
      'columns[3][orderable]': false,
      'columns[3][search][value]': '',
      'columns[3][search][regex]': false,
      'columns[4][data]': 'L30',
      'columns[4][name]': '',
      'columns[4][searchable]': true,
      'columns[4][orderable]': false,
      'columns[4][search][value]': '',
      'columns[4][search][regex]': false,
      'columns[5][data]': 'TotReqCount',
      'columns[5][name]': '',
      'columns[5][searchable]': true,
      'columns[5][orderable]': false,
      'columns[5][search][value]': '',
      'columns[5][search][regex]': false,
      ' order[0][column]': 0,
      'order[0][dir]': 'asc',
      'start': this.start1,
      'length': this.length1,
      'search[value]': '',
      'search[regex]': false
    }
    this.dashboardService.GetOpenRequirement(obj).subscribe((res) => {
      this.paginationDTO1.totalSize1 = res.recordsTotal;
      this.paginationDTO1.start1 = res.data.length;
      this.dataSource1 = new MatTableDataSource<any>(res.data);

    })
  }
}
