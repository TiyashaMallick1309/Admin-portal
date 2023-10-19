import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
cards=[
  {
    title:"EARNINGS (MONTHLY)",
    theme:"primary",
    value: '45,990',
    icon: 'fa-comments'
  },
  {
    title: "EARNINGS (ANNUAL)",
    theme:"info",
    value: '50,990',
    icon: 'fa-clipboard-list'
  },
  {
    title:"TASKS",
    theme:"warning",
    value: '50',
    icon: 'fa-dollar-sign',
    progress: 50
  },
  {
    title:"PENDING REQUESTS",
    theme:"danger",
    value: '2,45,990',
    icon: 'fa-calendar'
  },
];

public lineChartData: ChartConfiguration<'line'>['data'] = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July'
  ],
  datasets: [
    {
      data: [ 65, 59, 80, 81, 56, 55, 40 ],
      label: 'Series A',
      fill: true,
      tension: 0.5,
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)'
    }
  ]
};

public lineChartOptions: ChartOptions<'line'> = {
  responsive: false
};

public lineChartLegend = true;

}
