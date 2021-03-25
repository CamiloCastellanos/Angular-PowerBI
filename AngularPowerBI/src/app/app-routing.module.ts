import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PowerBILibraryComponent } from './components/power-bilibrary/power-bilibrary.component';
import { PowerBILinkComponent } from './components/power-bilink/power-bilink.component';


const routes: Routes = [
  {path:'Link', component:PowerBILinkComponent},
  {path:'Library', component:PowerBILibraryComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'Link' },
  { path: '', pathMatch: 'full', redirectTo: 'Link' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
