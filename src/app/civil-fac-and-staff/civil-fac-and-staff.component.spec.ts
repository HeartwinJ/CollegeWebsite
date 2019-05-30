import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilFacAndStaffComponent } from './civil-fac-and-staff.component';

describe('CivilFacAndStaffComponent', () => {
  let component: CivilFacAndStaffComponent;
  let fixture: ComponentFixture<CivilFacAndStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CivilFacAndStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CivilFacAndStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
