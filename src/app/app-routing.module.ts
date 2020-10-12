import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { PagesRoutingModule } from "./pages/pages.routing";
import { AuthRoutingModule } from "./auth/auth.routing";

import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { NopagesfoundComponent } from "./nopagesfound/nopagesfound.component";

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', component: NopagesfoundComponent }
];
 
@NgModule({
  declarations: [],
  imports: [ 
    RouterModule.forRoot( routes ),
    PagesRoutingModule,
    AuthRoutingModule 
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
