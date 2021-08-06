import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Dashboard } from '../../Model/Dashboard.model';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-power-bilink',
  templateUrl: './power-bilink.component.html',
  styleUrls: ['./power-bilink.component.css']
})
export class PowerBILinkComponent implements OnInit {

  public powerBI: Dashboard = new Dashboard();
  public alto: number = 450;
  public ancho: number = 1000;

  constructor(private dashboardService: DashboardService, private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.router.paramMap.subscribe((params: ParamMap) => {
      let dashBoardId: number = 0;
      dashBoardId = parseInt(params.get('id'));
      this.powerBI = this.dashboardService.getDashBoardPowerBI(dashBoardId);
    });
  }

}
