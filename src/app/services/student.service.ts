import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  constructor( private http: HttpClient ) { }

  getGroupSubjects(idGroup) {

    return this.http.get(`${ base_url }/groupSubject/subjectsByGroupId/${ idGroup }`, {headers: {'x-token': this.token }})
    .pipe(
      map( (resp: any ) => { 
        return resp;
      }),
    );
  }

  getGradesBySubject(idSubject, idStudent) {
  
    return this.http.get(`${ base_url }/grades/gradesByStundetIdAndSubjectId/${ idStudent }/${ idSubject }`, {headers: {'x-token': this.token }})
    .pipe(
      map( (resp: any ) => { 
        return resp;
      }),
    );

  }

  getDatebook(igGroup, dateInit, dateEnd) {
  
    return this.http.get(`${ base_url }/datebook/datebookByGroup/${ igGroup }/${ dateInit }/${ dateEnd }`, {headers: {'x-token': this.token }})
    .pipe(
      map( (resp: any ) => { 
        return resp;
      }),
    );

  }


  get token(): string {
    return sessionStorage.getItem('token') || '';
  }

}
