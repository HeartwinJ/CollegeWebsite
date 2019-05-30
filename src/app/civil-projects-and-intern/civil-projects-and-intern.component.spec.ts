import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilProjectsAndInternComponent } from './civil-projects-and-intern.component';

describe('CivilProjectsAndInternComponent', () => {
  let component: CivilProjectsAndInternComponent;
  let fixture: ComponentFixture<CivilProjectsAndInternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CivilProjectsAndInternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CivilProjectsAndInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
