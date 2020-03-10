import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CseFacAndStaffComponent } from './cse-fac-and-staff.component';

describe('CseFacAndStaffComponent', () => {
  let component: CseFacAndStaffComponent;
  let fixture: ComponentFixture<CseFacAndStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CseFacAndStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CseFacAndStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
