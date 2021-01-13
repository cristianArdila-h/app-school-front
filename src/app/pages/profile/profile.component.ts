import { Component, OnInit, OnChanges } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { StudentService } from '../../services/student.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  public user: any;
  public parent: any;
  public subjects: any;
  public userForm: FormGroup;
  public usrIsVisible: boolean;
  

  constructor(private userService: UserService, 
              private studentService: StudentService,
              private fb: FormBuilder) {

    this.user = userService.user;
    this.usrIsVisible = false;
    this.crearFormulario();

  }

  ngOnInit(): void {
    switch (this.user.rol) {
      case '3':
         this.userService.getUser(this.user.student_id).subscribe((resp: any) => {
        this.parent = resp.user;
        this.getSubjet(this.parent.group_id);
      });
        break;
      case '2':
        this.userService.getUser(this.user.parent_id).subscribe((resp: any) => {
        this.parent = resp.user;       
      });
        this.getSubjet(this.user.group_id);
        break;
    
      default:
        this.getSubjet(this.user.group_id);
        break;
    }
  }

  crearFormulario() {
    this.userForm = this.fb.group({
      _telefono: ['', Validators.required],
      _movil: ['',  Validators.required],
      _direccion: ['']
    });
  }
  get telefonoNoValido() {
    return this.userForm.get('_telefono').invalid && this.userForm.get('_telefono').touched;
  }
  get movilNoValido() {
    return this.userForm.get('_movil').invalid && this.userForm.get('_movil').touched;
  }
  get direccionNoValido() {
    return this.userForm.get('_direccion').invalid && this.userForm.get('_direccion').touched;
  }


  getSubjet(id_group) {
    this.studentService.getGroupSubjects(id_group)
      .subscribe(resp => this.subjects = resp.subjects);
  }

  updateUser() {
    var params = {'phone': this.userForm.get('_telefono').value,
    'movil': this.userForm.get('_movil').value,
    'address': this.userForm.get('_direccion').value
   };
    this.userService.updateUser(params).subscribe((resp: any) => {
      console.log('terminamos de modificar..');
    });
  }
  isVisible(action){
    if (action) {
      this.usrIsVisible = true;
    } else {
      this.usrIsVisible = false;
    }
  }
}
