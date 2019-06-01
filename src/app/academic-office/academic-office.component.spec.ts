import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicOfficeComponent } from './academic-office.component';

describe('AcademicOfficeComponent', () => {
  let component: AcademicOfficeComponent;
  let fixture: ComponentFixture<AcademicOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicOfficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
