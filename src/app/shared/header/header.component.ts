import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  user: any;

  constructor(private userService: UserService) {

   this.user = userService.user;

  }

  ngOnInit(): void {
  }

}
