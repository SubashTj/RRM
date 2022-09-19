import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';
import { RequirementService } from '../service/requirement.service';
@Component({
  selector: 'app-requirement-report',
  templateUrl: './requirement-report.component.html',
  styleUrls: ['./requirement-report.component.scss'],
  providers: [DatePipe]

})
export class RequirementReportComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['RequirementId', 'RequirementName', 'LosingRevenue', 'ClientName', 'InterviewsScheduled', 'InterviewsConducted', 'PanelInterviewsScheduled', 'PanelInterviewsConducted', 'Selected'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  isShown = false;
  report: any;
  range: FormGroup;
  toDate: any;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private requirementService: RequirementService, private datePipe: DatePipe) {
    this.toDate = this.datePipe.transform(this.toDate, 'yyyy-MM-dd');
  }

  ngOnInit(): void {
    this.range = new FormGroup({
      start: new FormControl<Date | null>(null),
    });
  }
  Show(range: any) {
    let obj = {
      'fromDate': '2022-02-28T18:30:00.000Z',
      'toDate': '2022-09-12T16:19:44.670Z'
    }
    this.requirementService.getReport(obj).subscribe((data) => {
      this.dataSource = new MatTableDataSource<any>(data);
    })
    this.isShown = !this.isShown
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

  }
}
