import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor( private http: HttpClient ) { }

  login(email, password) {

    const body = { email, password };
    console.log('Body', body);
    return this.http.post(`${ base_url }/auth/login`,  { email, password })
    .pipe(
      map( (resp: any ) => { 
        sessionStorage.setItem('token', resp.token);
        return true;
      })
    );
  }


  validarToken(roles:any) {
    
    return this.http.get(`${ base_url }/auth`, {headers: {'x-token': sessionStorage.getItem('token')}})
    .pipe(
      map( (resp: any ) => { 
        console.log('validarToken', resp, roles)
        return this.validateRol (roles, resp.user);
      })
    );
  }

  validateRol(roles:any[], user ) {

    var roleValidate = false;
    roles.forEach(rolId => {
      if(rolId == user.rol_id) {
        roleValidate = true;
      }
    });

    return roleValidate;

  }

}
