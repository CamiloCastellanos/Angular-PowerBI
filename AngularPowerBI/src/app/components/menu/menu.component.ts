import { Component, OnInit } from '@angular/core';
import { Dashboard } from 'src/app/Model/Dashboard.model';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public listaDashboard: Dashboard[] = [];

  constructor(private dashboardService: DashboardService) {
    this.obtenerDashboard();
  }

  ngOnInit(): void {
    this.obtenerDashboard();
  }

  private obtenerDashboard() {
    this.listaDashboard = this.dashboardService.listaDashboard;
  }

}
