import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../service/dashboard.service';
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};
@Component({
  selector: 'app-donut-chart1',
  templateUrl: './donut-chart1.component.html',
  styleUrls: ['./donut-chart1.component.scss']
})
export class DonutChart1Component implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  withFile: number;
  withoutFile: number;
  isShown = false;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
  }

  GetData() {
    let obj = {
      'fromDate': '2020-01-01T13:46:57.256Z',
      'toDate': '2022-09-13T13:46:57.256Z'
    }
    this.dashboardService.GetVoiceRecording(obj).subscribe((data) => {
      this.withFile = data.withFile;
      console.log(this.withFile)
      this.withoutFile = data.withoutFile;
      this.isShown = !this.isShown
      this.chartOptions = {
        series: [this.withFile, this.withoutFile],
        chart: {
          width: 380,
          type: "pie"
        },
        labels: ['withFile', 'withoutFile'],
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
