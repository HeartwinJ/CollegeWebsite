import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanitiesFacAndStaffComponent } from './humanities-fac-and-staff.component';

describe('HumanitiesFacAndStaffComponent', () => {
  let component: HumanitiesFacAndStaffComponent;
  let fixture: ComponentFixture<HumanitiesFacAndStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumanitiesFacAndStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanitiesFacAndStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
