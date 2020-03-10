import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EeeFacAndStaffComponent } from './eee-fac-and-staff.component';

describe('EeeFacAndStaffComponent', () => {
  let component: EeeFacAndStaffComponent;
  let fixture: ComponentFixture<EeeFacAndStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EeeFacAndStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EeeFacAndStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
