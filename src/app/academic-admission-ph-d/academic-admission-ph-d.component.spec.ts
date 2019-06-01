import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicAdmissionPhDComponent } from './academic-admission-ph-d.component';

describe('AcademicAdmissionPhDComponent', () => {
  let component: AcademicAdmissionPhDComponent;
  let fixture: ComponentFixture<AcademicAdmissionPhDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicAdmissionPhDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicAdmissionPhDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
