import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  student:any;

  constructor( private http: HttpClient ) { }

  getStudent(idStudent) {

    return this.http.get(`${ base_url }/students/${ idStudent }`, {headers: {'x-token': this.token }})
    .pipe(
      map( (resp: any ) => { 
        if(resp.ok === true) {
          this.student = resp.student;
        }
        return resp;
      }),
    );
  }

  getGroupSubjects(idGroup) {

    return this.http.get(`${ base_url }/groupSubject/subjectsByGroupId/${ idGroup }`, {headers: {'x-token': this.token }})
    .pipe(
      map( (resp: any ) => { 
        return resp;
      }),
    );
  }

  getGradesBySubject(idSubject) {

    return this.http.get(`${ base_url }/grades/gradesByStundetIdAndSubjectId/${ this.student.id }/${ idSubject }`, {headers: {'x-token': this.token }})
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
