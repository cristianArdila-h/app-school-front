import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReportsComponent } from "./reports/reports.component";
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthGuard } from "../guards/auth.guard";
import { ProfileComponent } from './profile/profile.component';
import { MessageComponent } from './message/message.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SubjectComponent } from './subject/subject.component';

const routes: Routes = [
    {
        path:'', 
        component: PagesComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'dashboard', component: DashboardComponent, data: {'title': "Dashboard" } },
            { path: 'reports', component: ReportsComponent, data: {'title': "Reports" } }, 
            { path: 'profile', component: ProfileComponent, data: {'title': "Profile" } }, 
            { path: 'message', component: MessageComponent, data: {'title': "Message" } }, 
            { path: 'schedule', component: ScheduleComponent, data: {'title': "Schedule" } }, 
            { path: 'calendar', component: CalendarComponent, data: {'title': "Calendar" } }, 
            { path: 'subject', component: SubjectComponent, data: {'title': "Subject" } }, 
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        ]
    }
];


@NgModule({
    declarations: [],
    imports: [ RouterModule.forChild( routes ) ],
    exports: [ RouterModule ]
  })
  export class PagesRoutingModule { }