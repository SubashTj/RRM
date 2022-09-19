import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { ScheduleService } from '../service/schedule.service';

@Component({
  selector: 'app-schedule-history',
  templateUrl: './schedule-history.component.html',
  styleUrls: ['./schedule-history.component.scss']
})
export class ScheduleHistoryComponent implements OnInit {
  displayedColumns: string[] = ['CandidateName', 'PhoneNumber', 'EmailId'];
  displayedColumns1: string[] = ['RequirementName', 'CandidateInterviewType', 'Date', 'CandidateStatus', 'EmployeeName', 'Comments', 'Audio']
  dataSource = new MatTableDataSource<any>();
  dataSource1 = new MatTableDataSource<any>();
  
  id: any;
  constructor(private scheduleService: ScheduleService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.GetData();
  }
  GetData() {
    this.id = this.activateRoute.snapshot.params["id"];
    let obj = {
      'id': this.id
    }
    this.scheduleService.GetData(obj).subscribe((res) => {
      this.dataSource = new MatTableDataSource<any>(res);
      this.dataSource1 = new MatTableDataSource<any>(res);

    })
  }

}
