import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EEFacAndStaffComponent } from './eefac-and-staff.component';

describe('EEFacAndStaffComponent', () => {
  let component: EEFacAndStaffComponent;
  let fixture: ComponentFixture<EEFacAndStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EEFacAndStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EEFacAndStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
