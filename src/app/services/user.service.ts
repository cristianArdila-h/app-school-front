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

  user:any;

  constructor( private http: HttpClient ) { }

  login(email, password) {

    const body = { email, password };
    console.log('Body', body);
    return this.http.post(`${ base_url }/auth/login`,  { email, password })
    .pipe(
      map( (resp: any ) => { 
        if(resp.ok === true) {
          sessionStorage.setItem('token', resp.token);
        }
        return resp;
      }),
    );
  }


  validarToken(roles:any) : Observable<boolean> {
    return this.http.get(`${ base_url }/auth`, {headers: {'x-token': this.token }})
    .pipe(
      map( (resp: any ) => { 
        console.log('Entra', resp, 'roles', roles)

        this.user = resp.user;
        return this.validateRol (roles, resp.user);
      }),
      catchError( error => of(false) )
    );
  }

  validateRol(roles:any[], user ) {

    var roleValidate = false;

    if( roles ) {
      roles.forEach(rolId => {
        if(rolId == user.rol_id) {
          roleValidate = true;
        }
      });
    } else {
      return true;
    }

    return roleValidate;

  }


  get token(): string {
    return sessionStorage.getItem('token') || '';
  }
}
