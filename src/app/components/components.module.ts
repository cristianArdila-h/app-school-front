import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { PaginationComponent } from './pagination/pagination.component';




@NgModule({
  declarations: [
  PaginationComponent
],
exports:[
  PaginationComponent
],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class ComponentsModule { }
