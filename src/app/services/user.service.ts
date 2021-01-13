import { Injectable, EventEmitter } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})

export class UserService {

  user:any;

  constructor( private http: HttpClient ) { }


  getQuery( query: string ) {
    const url = `${ base_url }` + query;

    const headers = new HttpHeaders ({
      'x-token': this.token
    });

    return this.http.get(url, { headers });

  }

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
  updateUser(userObj){
   
    return this.http.post(`${ base_url }/users/${this.user.id}`, userObj)
    .pipe(
      map( (resp: any ) => { 
        if(resp.ok === true) {
         console.log(resp);
        }
        return resp;
      }),
    );
  }

  validarToken(roles:any) : Observable<boolean> {
    return this.getQuery(`/auth`)
    .pipe(
      map( (resp: any ) => { 
        console.log('Entra', resp, 'roles', roles)
        this.user = resp.user;

        return this.validateRol (roles, resp.user);
      }),
      catchError( error => of(false) )
    );
  }
  getUser(id: string){
    return this.getQuery(`/users/${id}`);
  }
  getUsers(){
    return this.getQuery(`/users`);
  }

  validateRol(roles:any[], user ) {

    var roleValidate = false;

    if( roles ) {
      roles.forEach(rolId => {
        if(rolId == user.rol) {
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
