import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  constructor( private userService : UserService ) {

    console.log( 'usuario' , userService.usuario );

  }

  ngOnInit(): void {
  }

}
