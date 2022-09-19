import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexStroke,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexMarkers,
  ApexYAxis,
  ApexXAxis
} from "ng-apexcharts";
import { constant } from 'src/app/core/helpers/global.helper';
import { PaginationDTO } from 'src/app/shared/helpers/model/paginationDTO';
import { DashboardService } from '../service/dashboard.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  markers: ApexMarkers;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
};

@Component({
  selector: 'app-bar1-chart',
  templateUrl: './bar1-chart.component.html',
  styleUrls: ['./bar1-chart.component.scss']
})
export class Bar1ChartComponent implements OnInit {
  displayedColumns: string[] = ['period', 'offered', 'joined', 'percentage'];
  dataSource = new MatTableDataSource<any>();
  paginationDTO: PaginationDTO = new PaginationDTO();
  pageSizeOptions: any = 0;
  start: number;
  draw: number;
  length: number;
  summary: any;
  details: any;
  label: any = [];
  data: any = [];
  @ViewChild('MatPaginator') paginator: MatPaginator;
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(private dashboardService: DashboardService) {
    this.pageSizeOptions = constant().app.table.filtering.pageSizeOptions;
    this.paginationDTO = new PaginationDTO();
    this.start = this.paginationDTO.start;
    this.draw = this.paginationDTO.draw;
    this.length = this.paginationDTO.length;

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.GetCummulative();
  }
  private refreshtable(actionType: any) {
    this.paginationDTO.start = this.paginator.pageSize;
    this.paginationDTO.draw = this.paginator.pageIndex;
    this.paginationDTO.length = this.paginator.pageSize;
    this.paginationDTO.totalSize = this.paginator.length;

    if (actionType == 'add') {
      this.paginationDTO.draw = 1;
    }
    this.GetCummulative();
    this.paginator.pageSize = this.paginationDTO.start
    this.paginator.pageIndex = this.paginationDTO.draw;
    this.paginator.pageSize = this.paginationDTO.length;
    this.paginator.length = this.paginationDTO.totalSize;
  }
  onPaginateChange(event: any) {
    this.draw = event.pageIndex;
    this.length = event.pageSize;
    this.start = (event.pageIndex * event.pageSize);
    this.GetCummulative();
  }
  GetCummulative() {
    let obj = {
      'search': {
        'endDate': "2022-09-14T14:22:15.061Z",
        'startDate': "2020-09-14T14:22:15.061Z"
      }
    }
    this.dashboardService.GetCummulative(obj).subscribe((res) => {
      this.paginationDTO.totalSize = res.recordsTotal;
      this.paginationDTO.start = res.data.length;
      this.dataSource = new MatTableDataSource<any>(res.data);
      res.data.forEach((element: {
        joined: any; label: any;
      }) => {
        this.label.push(element.label)
        this.data.push(element.joined)
      });
      this.chartOptions = {
        series: [
          {
            name: "Joining-Ratio",
            data: this.data
          }
        ],
        chart: {
          type: "line",
          height: 350
        },
        stroke: {
          curve: "stepline"
        },
        dataLabels: {
          enabled: false
        },
        title: {
          text: "Offer to Joining Ratio",
          align: "left"
        },
        markers: {
          hover: {
            sizeOffset: 4
          }
        },
        yaxis: {
          min: -5,
          max: 5
        },
        xaxis: {
          categories: this.label
        },
      };
    })
  }
}
