import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechSyllabusComponent } from './mech-syllabus.component';

describe('MechSyllabusComponent', () => {
  let component: MechSyllabusComponent;
  let fixture: ComponentFixture<MechSyllabusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MechSyllabusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechSyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
