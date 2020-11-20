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
    , private studentService: StudentService) {}

  ngOnInit(): void {
    
    this.student = this.userService.user;
    this.loadSubjects(this.student.group_id);

  }

  loadSubjects(idGroup) {

    this.studentService.getGroupSubjects(idGroup)
      .subscribe( resp => this.subjects = resp.subjects );

  }

  loadGrades(subject) {

    this.subject = subject;
    console.log(this.subjects  )
    this.studentService.getGradesBySubject(subject.id, this.student.id)
      .subscribe( resp => {
        this.grades = resp.grades;
        console.log('Grades',  this.grades);
      });

  }
  
}
