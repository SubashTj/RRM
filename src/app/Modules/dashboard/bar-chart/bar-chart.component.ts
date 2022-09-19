import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip
} from "ng-apexcharts";
import { DashboardService } from '../service/dashboard.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  Confirmed: any;
  Joined: any;
  OfferRejected: any;
  Offered: any;
  label: any = [];
  Quarter1: any;
  Quarter2: any;
  Quarter3: any;
  Quarter4: any;
  Quarter5: any;
  Quarter6: any;
  Quarter7: any;
  Quarter8: any;
  Quarter9: any;
  Quarter10: any;
  Quarter11: any;
  Quarter12: any;
  Quarter13: any;
  Quarter14: any;
  Quarter15: any;
  Quarter16: any;
  Quarter17: any;
  Quarter18: any;
  Quarter19: any;
  Quarter20: any;
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
    this.dashboard.GetDatas(obj).subscribe((data) => {
      this.Quarter1 = data.Quarter1;
      this.Quarter2 = data.Quarter2;
      this.Quarter3 = data.Quarter3;
      this.Quarter4 = data.Quarter4;
      this.Quarter5 = data.Quarter5;
      this.Quarter6 = data.Quarter6;
      this.Quarter7 = data.Quarter7;
      this.Quarter8 = data.Quarter8;
      this.Quarter9 = data.Quarter9;
      this.Quarter10 = data.Quarter10;
      this.Quarter11 = data.Quarter11;
      this.Quarter12 = data.Quarter12;
      this.Quarter13 = data.Quarter13;
      this.Quarter14 = data.Quarter14;
      this.Quarter15 = data.Quarter15;
      this.Quarter16 = data.Quarter16;
      this.Quarter17 = data.Quarter17;
      this.Quarter18 = data.Quarter18;
      this.Quarter19 = data.Quarter19;
      this.Quarter20 = data.Quarter20;
      data.labels.forEach((element: any) => {
        this.label.push(element)
      });
      this.Confirmed = data.Confirmed
      this.Joined = data.Joined;
      this.OfferRejected = data.OfferRejected;
      this.Offered = data.Offered;
      this.chartOptions = {
        series: [
          {
            name: "Offered",
            data: [
              this.Quarter1.Offered,
              this.Quarter2.Offered,
              this.Quarter3.Offered,
              this.Quarter4.Offered,
              this.Quarter5.Offered,
              this.Quarter6.Offered,
              this.Quarter7.Offered,
              this.Quarter8.Offered,
              this.Quarter9.Offered
            ]
          },
          {
            name: "Offered Confirmed",
            data: [
              this.Quarter1.Confirmed,
              this.Quarter2.Confirmed,
              this.Quarter3.Confirmed,
              this.Quarter4.Confirmed,
              this.Quarter5.Confirmed,
              this.Quarter6.Confirmed,
              this.Quarter7.Confirmed,
              this.Quarter8.Confirmed,
              this.Quarter9.Confirmed,
            ]
          },
          {
            name: "Offered Rejected",
            data: [
              this.Quarter1.OfferRejected,
              this.Quarter2.OfferRejected,
              this.Quarter3.OfferRejected,
              this.Quarter4.OfferRejected,
              this.Quarter5.OfferRejected,
              this.Quarter6.OfferRejected,
              this.Quarter7.OfferRejected,
              this.Quarter8.OfferRejected,
              this.Quarter9.OfferRejected,
            ]
          },
          {
            name: "Joined",
            data: [
              this.Quarter1.Joined,
              this.Quarter2.Joined,
              this.Quarter3.Joined,
              this.Quarter4.Joined,
              this.Quarter5.Joined,
              this.Quarter6.Joined,
              this.Quarter7.Joined,
              this.Quarter8.Joined,
              this.Quarter9.Joined,
            ]
          }
        ],
        chart: {
          type: "bar",
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "50%",
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"]
        },
        xaxis: {
          categories: this.label
        },
        yaxis: {

          title: {

          },

        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "" + val;
            }
          }
        }
      };
    })
  }

}
