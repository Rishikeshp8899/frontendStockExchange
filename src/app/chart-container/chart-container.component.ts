import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexTitleSubtitle,
  ApexFill,
  ApexTooltip
} from 'ng-apexcharts';



@Component({
  selector: 'app-chart-container',
  imports: [NgApexchartsModule],
  templateUrl: './chart-container.component.html',
  styleUrl: './chart-container.component.css'
})
export class ChartContainerComponent {
 
   series: ApexAxisChartSeries = [
    {
      name: "Example Series",
      data: [10, 20, 30, 40]
    }
  ];

  chart: ApexChart = {
    type: "line",
    height: 350
  };

  xaxis: ApexXAxis = {
    categories: ["Jan", "Feb", "Mar", "Apr"]
  };

  dataLabels: ApexDataLabels = {
    enabled: false
  };

  stroke: ApexStroke = {
    curve: "smooth"
  };

  fill: ApexFill = {
    opacity: 1
  };

  tooltip: ApexTooltip = {
    enabled: true
  };

  }

