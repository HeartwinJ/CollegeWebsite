import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicDigitalInitiativesComponent } from './academic-digital-initiatives.component';

describe('AcademicDigitalInitiativesComponent', () => {
  let component: AcademicDigitalInitiativesComponent;
  let fixture: ComponentFixture<AcademicDigitalInitiativesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicDigitalInitiativesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicDigitalInitiativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
