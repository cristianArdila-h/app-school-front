import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { ComponentsModule } from '../components/components.module';

import { PagesComponent } from './pages.component';
import { ProfileComponent } from './profile/profile.component';
import { MessageComponent } from './message/message.component';
import { SubjectComponent } from './subject/subject.component';
import { DatebookComponent } from './datebook/datebook.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
  PagesComponent,
  ProfileComponent,
  MessageComponent,
  SubjectComponent,
  DatebookComponent
],
exports:[
  PagesComponent
],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ComponentsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
