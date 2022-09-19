import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";

import {
  ApexAxisChartSeries, ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";
import { DashboardService } from '../service/dashboard.service';

export type ChartOptions = {
  series: ApexNonAxisChartSeries | ApexAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
}
@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  Confirmed: any;
  Joined: any;
  OfferRejected: any;
  Offered: any;
  constructor(private dashboard: DashboardService) {
    
  }

  ngOnInit(): void {
    this.GetData();
  }
  GetData() {
    let obj = {
      'fromDate': '2020-09-13T17:02:17.241Z',
      'toDate': '2022-09-12T17:02:17.241Z'
    }
    this.dashboard.GetData(obj).subscribe((data) => {
      this.Confirmed = data.Confirmed
      this.Joined = data.Joined;
      this.OfferRejected = data.OfferRejected;
      this.Offered = data.Offered;
      this.chartOptions = {
        series: [this.Confirmed,this.Joined],
        chart: {
          type: "donut"
        },
        labels: ["Number Of Offered Yet to Decide", "Number Of Confirmed To Join", "Number Of Offered Rejected", "Number Of Joined"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      };
    })
  }
}
