import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartOptions, ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isAuthenticated: boolean = false;

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartData<'bar'> = {
    labels: this.barChartLabels,
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Sales'
      }
    ]
  };

  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartLabels: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartType: ChartType = 'line';
  public lineChartLegend = true;
  public lineChartData: ChartData<'line'> = {
    labels: this.lineChartLabels,
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Revenue',
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1
      }
    ]
  };

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: string[] = ['Red', 'Blue', 'Yellow'];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType: ChartType = 'pie';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.isAuthenticated = !!localStorage.getItem('authToken'); 
  }

  logout(): void {
    localStorage.removeItem('authToken');
    this.isAuthenticated = false;
    this.router.navigate(['/dashboard']);
  }
}
