import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dashboard } from '../../Model/Dashboard.Model';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-power-bilink',
  templateUrl: './power-bilink.component.html',
  styleUrls: ['./power-bilink.component.css']
})
export class PowerBILinkComponent implements OnInit {

  public powerBI: Dashboard = new Dashboard();

  constructor(private dashboardService: DashboardService, private router: ActivatedRoute) {
    debugger;
    let dashBoardId: number = 0;
    dashBoardId = parseInt(router.snapshot.paramMap.get('id'));
    this.powerBI = this.dashboardService.getDashBoard(dashBoardId);
    debugger;
  }

  ngOnInit(): void { }
}
