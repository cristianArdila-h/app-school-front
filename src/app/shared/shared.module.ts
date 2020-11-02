import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    HeaderComponent,
    BreadcrumbsComponent,
    MenuComponent
  ],
  exports:[
    HeaderComponent,
    BreadcrumbsComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
