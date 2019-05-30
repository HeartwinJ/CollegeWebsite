import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechFacAndStaffComponent } from './mech-fac-and-staff.component';

describe('MechFacAndStaffComponent', () => {
  let component: MechFacAndStaffComponent;
  let fixture: ComponentFixture<MechFacAndStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MechFacAndStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechFacAndStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
