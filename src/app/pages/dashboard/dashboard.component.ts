import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from "../../services/user.service";
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  public userForm: FormGroup;
  public usersList: any;
  public rols = environment.rols;
  
  constructor( private userService : UserService,
               private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users: any) => {
      if(users.ok === true) {
        this.usersList = users.users;
        console.log(this.usersList);
       }else{
         // error pero no se como los vamos a mostrar 
       }
     
    });
  }

  updateUser() {}
  createUser() {}

  crearFormulario() {
    this.userForm = this.fb.group({
      _name: ['', Validators.required],
      _lastname: ['',  Validators.required],
      _documentNumber: ['', Validators.required],
      _password: ['',  Validators.required],
      _email: ['', Validators.required],
      _phone: ['',  Validators.required],
      _movil: ['', Validators.required],
      _address: ['',  Validators.required],
      _birthdate: ['', Validators.required],
      _documentType: ['',  Validators.required],
      _rol: ['', Validators.required],
      _group_id: ['']
    });
  }
}
