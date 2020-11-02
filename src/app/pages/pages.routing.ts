import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReportsComponent } from "./reports/reports.component";
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthGuard } from "../guards/auth.guard";

const routes: Routes = [
    {
        path:'', 
        component: PagesComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'dashboard', component: DashboardComponent, data: {'title': "Dashboard" } },
            { path: 'reports', component: ReportsComponent, data: {'title': "Reports" } }, 
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        ],
        data: { roles: ["1"] }
    }
];


@NgModule({
    declarations: [],
    imports: [ RouterModule.forChild( routes ) ],
    exports: [ RouterModule ]
  })
  export class PagesRoutingModule { }