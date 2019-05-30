import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ECFacAndStaffComponent } from './ecfac-and-staff.component';

describe('ECFacAndStaffComponent', () => {
  let component: ECFacAndStaffComponent;
  let fixture: ComponentFixture<ECFacAndStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ECFacAndStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ECFacAndStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
