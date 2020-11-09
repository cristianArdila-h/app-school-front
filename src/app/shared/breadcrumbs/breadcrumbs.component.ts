import { Component, OnDestroy } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy{

  public title: string;
  public titleSubs$: Subscription;

  constructor( private router: Router) {
    //this.router.events.subscribe(event =>  console.log (event))
    // this.titleSubs$ = this.getDataRoute().subscribe( ({ title }) => {
    //   this.title = title;
    //   document.title = `Core - ${title}`;
    // });
  }
  ngOnDestroy(): void {
    this.titleSubs$.unsubscribe();
  }

  getDataRoute() {
    
    return this.router.events
    .pipe(
      filter( event => event instanceof ActivationEnd),
      filter( (event: ActivationEnd) => event.snapshot.firstChild === null),
      map( (event: ActivationEnd) => event.snapshot.data ),
    );
    

  }

}
