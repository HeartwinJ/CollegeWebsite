import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EeeSyllabusComponent } from './eee-syllabus.component';

describe('EeeSyllabusComponent', () => {
  let component: EeeSyllabusComponent;
  let fixture: ComponentFixture<EeeSyllabusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EeeSyllabusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EeeSyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
