import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Dashboard } from '../Model/Dashboard.model';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private listaPowerBI: Dashboard[] = [];

  constructor() {
    this.cargarLista();
  }

  // Carga las listas de los Dashboard
  private cargarLista() {

    let listaPantallas = {
      "pantalla": [
        {
          "titulo": "God Of War",
          "link": "https://app.powerbi.com/view?r=eyJrIjoiOTBjY2JjNWEtNGQzYS00OGE4LWI4MGQtNjgyMmZiZGU5YWY1IiwidCI6IjI5OWEyODgxLTEzODAtNDAyMC1iNDJmLTcxNWEzNWUxYmNhZiIsImMiOjR9&pageName=ReportSection"
        },
        {
          "titulo": "Histórico de Ventas Industria Videojuegos",
          "link": "https://app.powerbi.com/view?r=eyJrIjoiNzA2ZDE1NWYtMzIzNS00MjFkLWE3MWUtMjVlYjY3ZjE4NGJhIiwidCI6IjI5OWEyODgxLTEzODAtNDAyMC1iNDJmLTcxNWEzNWUxYmNhZiIsImMiOjR9&pageName=ReportSection"
        },
        {
          "titulo": "La Exposición de Estrenos Anime a Través del Tiempo",
          "link": "https://app.powerbi.com/view?r=eyJrIjoiZjczYjE0OTktM2EzYy00ZTkyLTlmZDQtNTFjNmE2MWIzM2IwIiwidCI6IjI5OWEyODgxLTEzODAtNDAyMC1iNDJmLTcxNWEzNWUxYmNhZiIsImMiOjR9"
        },
        {
          "titulo": "Comportamiento de las Unidades y Margen por Región para el Periodo 2017 - 2019",
          "link": "https://app.powerbi.com/view?r=eyJrIjoiMzI1MzdiNjktMDAxOS00ZWM3LTk2NTEtYTljNzc1ZWIwYzY3IiwidCI6IjI5OWEyODgxLTEzODAtNDAyMC1iNDJmLTcxNWEzNWUxYmNhZiIsImMiOjR9"
        },
        {
          "titulo": "Producto Interno Bruto per Capital (PIB) a Nivel Mundial",
          "link": "https://app.powerbi.com/view?r=eyJrIjoiNDBmOGUyYzAtZmI2ZS00NGRkLTgwMTItM2RhMGRmM2RkZDQ5IiwidCI6IjI5OWEyODgxLTEzODAtNDAyMC1iNDJmLTcxNWEzNWUxYmNhZiIsImMiOjR9"
        },
        {
          "titulo": "Ventas Totales para el Año 2019",
          "link": "https://app.powerbi.com/view?r=eyJrIjoiNjZmMjJkZTEtMDBiMi00YTRjLTg2MjctMmI2NGJjYjZiMTg3IiwidCI6IjI5OWEyODgxLTEzODAtNDAyMC1iNDJmLTcxNWEzNWUxYmNhZiIsImMiOjR9"
        },
        {
          "titulo": "Botones Interactivos",
          "link": "https://app.powerbi.com/view?r=eyJrIjoiMjY5Mjg3YjMtMjdkNS00MzM1LTliYWUtMTMzZTNiZjI2OWY1IiwidCI6IjI5OWEyODgxLTEzODAtNDAyMC1iNDJmLTcxNWEzNWUxYmNhZiIsImMiOjR9"
        },
        {
          "titulo": "Procesos de Justicia y Derecho para la Republica de Colombia",
          "link": "https://app.powerbi.com/view?r=eyJrIjoiNjc4M2QxNDgtNTFlNi00YzI3LWJjZDktNmI0M2IwMjc4NDU1IiwidCI6IjI5OWEyODgxLTEzODAtNDAyMC1iNDJmLTcxNWEzNWUxYmNhZiIsImMiOjR9&pageName=ReportSection"
        },
      ]
    }

    for (const item in listaPantallas.pantalla) {
      let titulo = new Dashboard();
      titulo.titulo = listaPantallas.pantalla[item].titulo;
      titulo.link = listaPantallas.pantalla[item].link;
      this.listaPowerBI.push(titulo);
    }
  }

  //Retorna el dashboard del Power Bi dependiendo de la posicion en la lista
  public getDashBoardPowerBI(dashBoardId: number): Dashboard {
    if (dashBoardId < 0 || dashBoardId > this.listaPowerBI.length) {
      dashBoardId = 0;
    }
    return this.listaPowerBI[dashBoardId];
  }

  /// Creacion de Lista de Dashboards
  public getListaDashboard(): MenuItem[] {
    let menuLateral: MenuItem[] = [];
    menuLateral = [
      this.getPowerBI(),
      this.getGoogleDataStudio(),
      this.getChart(),
      this.getTableau()
    ]
    return menuLateral;
  }

  /// Creacion Menu de Power BI
  private getPowerBI(): MenuItem {
    let menuPowerBI: MenuItem;
    let listaDashboard: MenuItem[] = [];

    this.listaPowerBI.forEach(
      (dashBoard, index) => {
        listaDashboard.push({
          label: dashBoard.titulo,
          icon: 'pi pi-pw pi-file',
          routerLink: 'Link/' + index
        });
      }
    );

    menuPowerBI = {
      label: 'Power BI',
      icon: 'pi pi-pw pi-file',
      items: listaDashboard
    }
    return menuPowerBI;
  }

  /// Creacion Menu de Tableau
  private getTableau(): MenuItem {
    let menuTableu: MenuItem;
    let listaDashboard: MenuItem[] = [];

    this.listaPowerBI.forEach(
      (dashBoard, index) => {
        listaDashboard.push({
          label: dashBoard.titulo,
          icon: 'pi pi-pw pi-file',
          routerLink: 'Link/' + index
        });
      }
    );

    menuTableu = {
      label: 'Tableau',
      icon: 'pi pi-pw pi-file',
      items: listaDashboard
    }
    return menuTableu;
  }

  /// Creacion Menu de Google Data Studio
  private getChart(): MenuItem {
    let menuChart: MenuItem;
    let listaDashboard: MenuItem[] = [];

    this.listaPowerBI.forEach(
      (dashBoard, index) => {
        listaDashboard.push({
          label: dashBoard.titulo,
          icon: 'pi pi-pw pi-file',
          routerLink: 'Link/' + index
        });
      }
    );

    menuChart = {
      label: 'Chart Prime NG',
      icon: 'pi pi-pw pi-file',
      items: listaDashboard
    }
    return menuChart;
  }

  /// Creacion Menu Google Data Studio
  private getGoogleDataStudio(): MenuItem {
    let menuGoogleDataStudio: MenuItem;
    let listaDashboard: MenuItem[] = [];

    this.listaPowerBI.forEach(
      (dashBoard, index) => {
        listaDashboard.push({
          label: dashBoard.titulo,
          icon: 'pi pi-pw pi-file',
          routerLink: 'Link/' + index
        });
      }
    );

    menuGoogleDataStudio = {
      label: 'Google Data Studio',
      icon: 'pi pi-pw pi-file',
      items: listaDashboard
    }
    return menuGoogleDataStudio;
  }

}
