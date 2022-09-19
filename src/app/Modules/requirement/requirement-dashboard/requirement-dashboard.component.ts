import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2'
import { RequirementService } from '../service/requirement.service';
import { PaginationDTO } from 'src/app/shared/helpers/model/paginationDTO';
import { SelectionModel } from '@angular/cdk/collections';
import { constant } from 'src/app/core/helpers/global.helper';
@Component({
  selector: 'app-requirement-dashboard',
  templateUrl: './requirement-dashboard.component.html',
  styleUrls: ['./requirement-dashboard.component.scss']
})
export class RequirementDashboardComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['requirementId', 'requirementName', 'revenue', 'clientName', 'scheduled', 'conducted', 'panelscheduled', 'panelconducted', 'selected', 'action'];
  dataSource = new MatTableDataSource<any>();
  paginationDTO: PaginationDTO = new PaginationDTO();
  selection = new SelectionModel<any>(true, []);
  pageSizeOptions: any = 0;
  start: number;
  draw: number;
  length: number;
  summary: any;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private router: Router, private requirementService: RequirementService) {
    this.pageSizeOptions = constant().app.table.filtering.pageSizeOptions;
    this.paginationDTO = new PaginationDTO();
    this.start = this.paginationDTO.start;
    this.draw = this.paginationDTO.draw;
    this.length = this.paginationDTO.length;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.GetSummary();
    this.GetList();
  }
  private refreshtable(actionType: any) {
    this.paginationDTO.start = this.paginator.pageSize;
    this.paginationDTO.draw = this.paginator.pageIndex;
    this.paginationDTO.length = this.paginator.pageSize;
    this.paginationDTO.totalSize = this.paginator.length;

    if (actionType == 'add') {
      this.paginationDTO.draw = 1;
    }
    this.GetList();
    this.paginator.pageSize = this.paginationDTO.start
    this.paginator.pageIndex = this.paginationDTO.draw;
    this.paginator.pageSize = this.paginationDTO.length;
    this.paginator.length = this.paginationDTO.totalSize;

    this.selection = new SelectionModel<any>(true, []);
  }
  onPaginateChange(event: any) {
    this.draw = event.pageIndex;
    this.length = event.pageSize;
    this.start = (event.pageIndex * event.pageSize);
    this.GetList();
  }
  GetSummary() {
    this.requirementService.GetSummary().subscribe((data) => {
      this.summary = data;
    })
  }
  GetList() {
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
      'columns[10][data]': 'Action',
      'columns[10][name]': '',
      'columns[10][searchable]': true,
      'columns[10][orderable]': false,
      'columns[10][search][value]': '',
      'columns[10][search][regex]': false,
      'order[0][column]': 0,
      'order[0][dir]': 'desc',
      'start': this.start,
      'length': this.length,
      'search[value]': '',
      'search[regex]': false,
      'search[designation]': '',
      'search[department]': '',
      'search[priority]': '',
      'search[recruiter]': '',
      'search[Client]': '',
      'search[startDate]': '',
      'search[endDate]': '',
      'search[startOnboardDate]': '',
      'search[endOnboardDate]': '',
      'search[status]': '',
      'search[myposting]': false,
      'search[watchId]': false,
      'search[searchAllColumns]': ''
    }
    this.requirementService.GetList(obj).subscribe((res) => {
      this.paginationDTO.totalSize = res.recordsTotal;
      this.paginationDTO.start = res.data.length;
      this.dataSource = new MatTableDataSource<any>(res.data);

    })
  }
  Add() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to create new requirement",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Create it!'
    }).then((result) => {
      this.router.navigate(['/requirement/create'])
    })
  }
  Update(id: any) {
    this.router.navigate([`/requirement/update/${id}`])
  }
}
