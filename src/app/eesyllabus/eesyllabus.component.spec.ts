import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EESyllabusComponent } from './eesyllabus.component';

describe('EESyllabusComponent', () => {
  let component: EESyllabusComponent;
  let fixture: ComponentFixture<EESyllabusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EESyllabusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EESyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
