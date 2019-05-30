import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechProjectsAndInternComponent } from './mech-projects-and-intern.component';

describe('MechProjectsAndInternComponent', () => {
  let component: MechProjectsAndInternComponent;
  let fixture: ComponentFixture<MechProjectsAndInternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MechProjectsAndInternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechProjectsAndInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
