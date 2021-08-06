import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PowerBILinkComponent } from './components/power-bilink/power-bilink.component';
import { PowerBILibraryComponent } from './components/power-bilibrary/power-bilibrary.component';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';
import { MenuComponent } from './components/menu/menu.component';
/// PrimeNG
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenubarModule} from 'primeng/menubar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PowerBILinkComponent,
    PowerBILibraryComponent,
    DomSeguroPipe,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PanelMenuModule,
    MenubarModule,
    SidebarModule,
    ButtonModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
