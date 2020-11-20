import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-datebook',
  templateUrl: './datebook.component.html'
})
export class DatebookComponent implements OnInit {

  stundet: any;
  activitys: any[];
  datebook = new FormGroup({
    date: new FormControl(''),
  });
  dateInit: any;
  dateEnd: any;

  constructor(private userService: UserService
            , private studentService: StudentService) { }

  ngOnInit(): void {

    this.stundet = this.userService.user;

  }

  searchsDatebook(dataSelected) {

    const dateInit = this.datebook.get('date').value ? this.convertDateFormat(this.datebook.get('date').value) : new Date();
    const dates = this.calculateDates(dataSelected, dateInit);

    this.dateInit = dates.dateInit;
    this.dateEnd = dates.dateEnd;

    this.studentService.getDatebook(this.stundet.group_id, this.formatDate(dates.dateInit) ,  this.formatDate(dates.dateEnd))
    .subscribe(resp => {
      this.activitys = resp.datebook;
      console.log(this.activitys);
    });

  }

  
  calculateDates(caulate: string, date: any) {

    var dateEnd = new Date();
    var dateInit = new Date(date);

    switch (caulate) {
      case 'hoy':
        dateEnd.setDate(dateInit.getDate() +1);
        return {'dateInit': dateInit , 'dateEnd': dateEnd}
      case 'semana':
        dateEnd.setDate(dateInit.getDate() +7);
        return {'dateInit': dateInit , 'dateEnd': dateEnd}
      case 'mes':
        dateInit = new Date(dateInit.getFullYear(), dateInit.getMonth(), 1);
        dateEnd = new Date(dateInit.getFullYear(), dateInit.getMonth() + 1, 0);
        return {'dateInit': dateInit , 'dateEnd': dateEnd}

      default:
        dateInit = new Date(this.datebook.get('date').value);
        dateEnd.setDate(dateInit.getDate() +1);
        return {'dateInit': dateInit , 'dateEnd': dateEnd}
    }

  }

  formatDate(dateNow: Date) {
    return `${dateNow.getFullYear()}-${dateNow.getMonth()+1}-${dateNow.getDate()}`;
  }

  formatDateShow(dateNow: Date) {
    return dateNow.toDateString(); 
  }

  convertDateFormat(date) {

    var info = date.split('-');
    var dateFormated = new Date();

    dateFormated.setDate( info[2]);
    dateFormated.setMonth( info[1]-1);
    dateFormated.setFullYear( info[0]);
  
    return dateFormated;
  }


}
