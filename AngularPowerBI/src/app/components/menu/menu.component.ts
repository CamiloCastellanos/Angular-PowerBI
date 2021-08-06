import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Dashboard } from 'src/app/Model/Dashboard.model';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  public listaDashboard: MenuItem[] = [];
  visibilidadSideBar: boolean;

  /// Power BI
  /// Tableau
  /// Google Data Studio

  constructor(private dashboardService: DashboardService) {
    this.obtenerDashboard();
  }

  ngOnInit(): void {
    this.obtenerDashboard();
  }

  private obtenerDashboard() {
    this.listaDashboard= this.dashboardService.getListaDashboard();
  }

}
