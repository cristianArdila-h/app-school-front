import { Component } from '@angular/core';

import { UserService } from "../../services/user.service";
import { tap } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  user: string;
  password: string;

  constructor( private userService: UserService) {}

  login() {

    this.userService.login('admin@gmail.com', '123456').subscribe(res => console.log('reas', res));

  }

}
