import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent implements OnInit {

  @Input() size: number ;
  @Input() lengt: number;
  @Input() reset: number;
  @Output() page: EventEmitter<number> = new EventEmitter();
  actualPage:number = 0;
  firstValue: number;
  secondValue: number;

  constructor() {
  }

  ngOnInit(): void {
    this.nextActivate();
    this.previousActive();
  }

  ngOnChanges(changes: any) {
    this.actualPage = this.reset;
    this.values();
    this.page.emit(this.actualPage);
  }

  decrease() {
    if(this.actualPage > 0) {
      this.actualPage = --this.actualPage;
      console.log(this.actualPage);
      this.nextActivate();
      this.previousActive();
      this.page.emit(this.actualPage);
      this.values();
    }
  }

  increase() {
    this.actualPage = ++this.actualPage;
    console.log(this.actualPage);
    this.nextActivate();
    this.previousActive();
    this.page.emit(this.actualPage);   
    this.values(); 
  }

  nextActivate() {
    if( this.actualPage+1 <  Math.ceil(this.lengt / this.size) ) {
      return true;
    } else {
      return false;
    }
  }

  previousActive() {      
    return this.actualPage != 0;
  }

  values() {

    this.firstValue = (this.actualPage* this.size)+1;
    const sizeSecondValue = (this.actualPage+1)* this.size;

    if(sizeSecondValue > this.lengt) {
      this.secondValue = this.lengt;
    } else {
      this.secondValue = sizeSecondValue;
    }

  }

}
