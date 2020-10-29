import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

import { ReportsComponent } from './reports/reports.component';
import { PagesComponent } from './pages.component';
import { MenuComponent } from '../shared/menu/menu.component';



@NgModule({
  declarations: [
  ReportsComponent,
  PagesComponent
],
exports:[
  ReportsComponent,
  PagesComponent
],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class PagesModule { }
