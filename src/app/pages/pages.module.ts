import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { ComponentsModule } from '../components/components.module';

import { ReportsComponent } from './reports/reports.component';
import { PagesComponent } from './pages.component';
import { ProfileComponent } from './profile/profile.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MessageComponent } from './message/message.component';
import { SubjectComponent } from './subject/subject.component';



@NgModule({
  declarations: [
  ReportsComponent,
  PagesComponent,
  ProfileComponent,
  ScheduleComponent,
  CalendarComponent,
  MessageComponent,
  SubjectComponent
],
exports:[
  ReportsComponent,
  PagesComponent
],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ComponentsModule
  ]
})
export class PagesModule { }
