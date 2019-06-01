import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicAdmissionBTechComponent } from './academic-admission-btech.component';

describe('AcademicAdmissionBTechComponent', () => {
  let component: AcademicAdmissionBTechComponent;
  let fixture: ComponentFixture<AcademicAdmissionBTechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicAdmissionBTechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicAdmissionBTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
