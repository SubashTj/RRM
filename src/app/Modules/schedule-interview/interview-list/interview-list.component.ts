import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';
import { PaginationDTO } from 'src/app/shared/helpers/model/paginationDTO';
import { SelectionModel } from '@angular/cdk/collections';
import { constant } from 'src/app/core/helpers/global.helper';
import { ScheduleService } from '../service/schedule.service';
@Component({
  selector: 'app-interview-list',
  templateUrl: './interview-list.component.html',
  styleUrls: ['./interview-list.component.scss']
})
export class InterviewListComponent implements OnInit {

  displayedColumns: string[] = ['requirementId', 'requirementName', 'revenue', 'clientName', 'panelscheduled', 'panelconducted', 'selected', 'action'];
  displayedColumns1: string[] = ['employeename', 'reqdates'];

  dataSource = new MatTableDataSource<any>();
  dataSource1 = new MatTableDataSource<any>();
  paginationDTO: PaginationDTO = new PaginationDTO();
  selection = new SelectionModel<any>(true, []);
  pageSizeOptions: any = 0;
  start: number;
  draw: number;
  length: number;
  reqdates: any;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  data: any;
  constructor(private router: Router, private scheduleService: ScheduleService) {
    this.pageSizeOptions = constant().app.table.filtering.pageSizeOptions;
    this.paginationDTO = new PaginationDTO();
    this.start = this.paginationDTO.start;
    this.draw = this.paginationDTO.draw;
    this.length = this.paginationDTO.length;
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
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.GetList();
    this.AllotedSchedules();
  }
  GetList() {
    let obj = {
      'draw': this.draw,
      'columns[0][data]': 'CMCan_Name',
      'columns[0][name]': '',
      'columns[0][searchable]': true,
      'columns[0][orderable]': true,
      'columns[0][search][value]': '',
      'columns[0][search][regex]': false,
      'columns[1][data]': 'CMCan_Phone',
      'columns[1][name]': '',
      'columns[1][searchable]': true,
      'columns[1][orderable]': true,
      'columns[1][search][value]': '',
      'columns[1][search][regex]': false,
      'columns[2][data]': 'RequirementName',
      'columns[2][name]': '',
      'columns[2][searchable]': true,
      'columns[2][orderable]': true,
      'columns[2][search][value]': '',
      'columns[2][search][regex]': false,
      'columns[3][data]': 'CMSch_Comments',
      'columns[3][name]': '',
      'columns[3][searchable]': true,
      'columns[3][orderable]': true,
      'columns[3][search][value]': '',
      'columns[3][search][regex]': false,
      'columns[4][data]': 'EmployeeName',
      'columns[4][name]': '',
      'columns[4][searchable]': true,
      'columns[4][orderable]': true,
      'columns[4][search][value]': '',
      'columns[4][search][regex]': false,
      'columns[5][data]': 'CMSch_Time',
      'columns[5][name]': '',
      'columns[5][searchable]': true,
      'columns[5][orderable]': true,
      'columns[5][search][value]': '',
      'columns[5][search][regex]': false,
      'columns[6][data]': 'CanStatus',
      'columns[6][name]': '',
      'columns[6][searchable]': true,
      'columns[6][orderable]': false,
      'columns[6][search][value]': '',
      'columns[6][search][regex]': false,
      'columns[7][data]': 'View',
      'columns[7][name]': '',
      'columns[7][searchable]': true,
      'columns[7][orderable]': false,
      'columns[7][search][value]': '',
      'columns[7][search][regex]': false,
      'columns[8][data]': 'Action',
      'columns[8][name]': '',
      'columns[8][searchable]': true,
      'columns[8][orderable]': false,
      'columns[8][search][value]': '',
      'columns[8][search][regex]': false,
      'order[0][column]': 5,
      'order[0][dir]': 'asc',
      'start': this.start,
      'length': this.length,
      'search[value]': '',
      'search[regex]': false,
      'search[candidateName]': '',
      'search[clientName]': '',
      'search[requirementId]': '',
      'search[statusId]': '',
      'search[employeeCode]': '',
      'search[requirementStatus]': '',
      'search[interviewType]': '',
      'search[SkillDetailsPlan]': '',
      'search[myRecordings]': false,
      'search[filterText]': '',
      'search[Startdate]': '',
      'search[Enddate]': ''
    }
    this.scheduleService.GetList(obj).subscribe((res) => {
      this.paginationDTO.totalSize = res.recordsTotal;
      this.paginationDTO.start = res.data.length;
      this.dataSource = new MatTableDataSource<any>(res.data);

    })
  }
  AllotedSchedules() {
    this.scheduleService.AllotedSchedules().subscribe((res) => {
      this.dataSource1 = new MatTableDataSource<any>(res);
      this.data = res
      this.reqdates = res[0].reqdates;
      console.log(this.reqdates)

    })
  }
  View(id: any) {
    this.router.navigate([`/schedule-interview/view/${id}`])
  }
  Add() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to create new schedule-interviewer",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Create it!'
    }).then((result) => {
      this.router.navigate(['/schedule-interview/create-interview'])
    })

  }
  Update(element: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to update schedule-interviewer",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Create it!'
    }).then((result) => {
      this.router.navigate([`/schedule-interview/update-interview/${element}`])
    })

  }
  Delete(element: any) {
    let obj = {
      'id': element
    }
    console.log(obj)
    this.scheduleService.DeleteSchedule(obj).subscribe((data) => {

    })
  }
}
