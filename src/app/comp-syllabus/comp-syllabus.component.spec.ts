import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompSyllabusComponent } from './comp-syllabus.component';

describe('CompSyllabusComponent', () => {
  let component: CompSyllabusComponent;
  let fixture: ComponentFixture<CompSyllabusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompSyllabusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompSyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
