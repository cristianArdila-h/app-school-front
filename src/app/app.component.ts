import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'core';

  constructor() {
    //this.expiredSession().subscribe();
  }
  
  expiredSession() {

    let i = 0;

    return new Observable( observer => {

      const interval = setInterval(() => {

        i++;
        observer.next(i);
        console.log(i);
        this.addEvent(document, "mouseout", function(e) {
          e = e ? e : window.event;
          var from = e.relatedTarget || e.toElement;
          if (!from || from.nodeName == "HTML") {
        
            i = 0;
          }
        });

        if ( i === 10 ) {
          console.log('ExpiredSession');
          clearInterval( interval );
          observer.complete();
        }
      }
      ,1000);
    });

  }

  addEvent(obj, evt, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(evt, fn, false);
    }
    else if (obj.attachEvent) {
        obj.attachEvent("on" + evt, fn);
    }
  }

}


