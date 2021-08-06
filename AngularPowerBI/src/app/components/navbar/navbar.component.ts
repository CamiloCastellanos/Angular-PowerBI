import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[];
  constructor() { }
  visibleSidebar1: boolean;
  ngOnInit(): void {
    this.items = [
      {
        label: 'Power BI',
        icon: 'pi pi-fw pi-github',
        url:"https://github.com/CamiloCastellanos/PowerBi",
        target:"_blank"
      },
      {
        label: 'Git Page',
        icon: 'pi pi-fw pi-github',
        url:"https://github.com/CamiloCastellanos/Angular-PowerBI",
        target:"_blank"
      }
    ];
  }

}
