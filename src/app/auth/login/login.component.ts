import { Component } from '@angular/core';

import { UserService } from "../../services/user.service";
import {Router} from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  error;
  loginForm = new FormGroup({
    user: new FormControl(''),
    password: new FormControl(''),
  });

  constructor( private userService: UserService
              ,private router:Router) {}

  login() {

    this.userService.login(this.loginForm.get('user').value, this.loginForm.get('password').value)
      .subscribe(res => {
        if(res.ok === false) {
          this.error = 'Usuario o Contraseña incorrectos. Comprueba los datos y vuelve a intentarlo.';
        } else {
          this.router.navigate(['dashboard']);
        }
      });

  }

}
