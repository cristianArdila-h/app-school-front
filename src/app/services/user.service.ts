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

  public usuario: any = {};

  constructor( private http: HttpClient ) { }

  login() {
    console.log('login')
    return this.http.get(`${ base_url }/serviciosMercadolibre/test/1`)
    .pipe(
      map( (resp: any ) => { 
        this.usuario = resp;
        return true;
      })
    );
    // .subscribe((resp) => console.log(resp));
    

  }


  validarToken(): Observable<boolean> {
    
    return this.http.get(`${ base_url }/serviciosMercadolibre/test/1`)
    .pipe(
      map( resp => {
        this.usuario = resp;
        console.log('token', resp );
        return true;
      }),
      catchError( error => of(false) )
    );

  }

}
