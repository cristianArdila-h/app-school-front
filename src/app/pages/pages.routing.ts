import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthGuard } from "../guards/auth.guard";
import { ProfileComponent } from './profile/profile.component';
import { MessageComponent } from './message/message.component';
import { SubjectComponent } from './subject/subject.component';
import { DatebookComponent } from './datebook/datebook.component';

const routes: Routes = [
    {
        path:'', 
        component: PagesComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'dashboard', component: DashboardComponent, data: {'title': "Dashboard" } },
            { path: 'profile', component: ProfileComponent, data: {'title': "Perfil" } }, 
            { path: 'message', component: MessageComponent, data: {'title': "Mensajes" } }, 
            { path: 'subject', component: SubjectComponent, data: {'title': "Notas" } }, 
            { path: 'datebook', component: DatebookComponent, data: {'title': "Agenda" } }, 
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        ],
        data: { }
    }
];


@NgModule({
    declarations: [],
    imports: [ RouterModule.forChild( routes ) ],
    exports: [ RouterModule ]
  })
  export class PagesRoutingModule { }