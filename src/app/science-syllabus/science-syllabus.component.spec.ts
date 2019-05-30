import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceSyllabusComponent } from './science-syllabus.component';

describe('ScienceSyllabusComponent', () => {
  let component: ScienceSyllabusComponent;
  let fixture: ComponentFixture<ScienceSyllabusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScienceSyllabusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScienceSyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
