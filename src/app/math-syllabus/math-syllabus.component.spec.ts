import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathSyllabusComponent } from './math-syllabus.component';

describe('MathSyllabusComponent', () => {
  let component: MathSyllabusComponent;
  let fixture: ComponentFixture<MathSyllabusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathSyllabusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathSyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
