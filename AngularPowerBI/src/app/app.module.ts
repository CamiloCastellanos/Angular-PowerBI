import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PowerBILinkComponent } from './components/power-bilink/power-bilink.component';
import { PowerBILibraryComponent } from './components/power-bilibrary/power-bilibrary.component';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PowerBILinkComponent,
    PowerBILibraryComponent,
    DomSeguroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
