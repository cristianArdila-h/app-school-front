import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { environment } from "../../../environments/environment";
import { UserService } from '../../services/user.service';

const rols = environment.rols;

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  student: any;
  subjects: any[];
  subject: any;
  grades: any[];

  constructor(private userService: UserService
    , private studentService: StudentService) { 

      if(this.userService.user.rol_id === rols.PARENT) {

        this.studentService.getStudent(this.userService.user.parent.student_id)
            .subscribe(resp => {
              this.student = resp.student;
              console.log('Stunde', this.student, this.student.group_id);
              this.loadSubjects(this.student.group_id);
              
            });
  
      } 

      if(this.userService.user.rol_id === rols.STUDENT) {

        this.studentService.getStudent(this.userService.user.student.student_id)
            .subscribe(stundent => this.student = stundent);
  
      }

    }

  ngOnInit(): void {

    
    

  }

  loadSubjects(idGroup) {

    this.studentService.getGroupSubjects(idGroup)
      .subscribe( resp => this.subjects = resp.subjectsByGroupId );

  }

  loadGrades(subject) {
    this.subject = subject;
    this.studentService.getGradesBySubject(subject.id)
      .subscribe( resp => {
        this.grades = resp.grades;
        console.log('Grades',  this.grades);
      });

  }
  
}
