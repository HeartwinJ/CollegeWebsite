import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilSyllabusComponent } from './civil-syllabus.component';

describe('CivilSyllabusComponent', () => {
  let component: CivilSyllabusComponent;
  let fixture: ComponentFixture<CivilSyllabusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CivilSyllabusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CivilSyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
