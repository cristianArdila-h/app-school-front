import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmUserComponent } from './adm-user.component';

describe('AdmUserComponent', () => {
  let component: AdmUserComponent;
  let fixture: ComponentFixture<AdmUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
