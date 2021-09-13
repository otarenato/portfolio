import { Component, OnInit } from '@angular/core';
import { ChartType, GoogleChartComponent } from 'angular-google-charts';
import { BAR_CHART, LINE_CHART, PIE_CHART } from 'src/assets/constants/graficos';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  pieChart!: any;
  lineChart!: any;
  barChart!: any;

  constructor() { }

  ngOnInit(): void {
    this.pieChart = PIE_CHART;
    this.lineChart = LINE_CHART;
    this.barChart = BAR_CHART;
  }

  logout() {
    console.log('chamou');
  }

}
