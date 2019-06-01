import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicAdmissionMTechComponent } from './academic-admission-mtech.component';

describe('AcademicAdmissionMTechComponent', () => {
  let component: AcademicAdmissionMTechComponent;
  let fixture: ComponentFixture<AcademicAdmissionMTechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicAdmissionMTechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicAdmissionMTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
