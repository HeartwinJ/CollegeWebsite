import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhyFacAndStaffComponent } from './phy-fac-and-staff.component';

describe('PhyFacAndStaffComponent', () => {
  let component: PhyFacAndStaffComponent;
  let fixture: ComponentFixture<PhyFacAndStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhyFacAndStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhyFacAndStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
