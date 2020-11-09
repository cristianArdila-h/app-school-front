import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  user: any;

  constructor(private userService: UserService) {

    this.user = userService.user;

  }

  ngOnInit(): void {
  }

}
