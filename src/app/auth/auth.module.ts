import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ 
    LoginComponent,
    RegisterComponent
  ],
  exports:[ 
    LoginComponent,
    RegisterComponent
  ],
  imports: [ 
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
