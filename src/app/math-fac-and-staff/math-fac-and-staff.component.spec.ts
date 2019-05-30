import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathFacAndStaffComponent } from './math-fac-and-staff.component';

describe('MathFacAndStaffComponent', () => {
  let component: MathFacAndStaffComponent;
  let fixture: ComponentFixture<MathFacAndStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathFacAndStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathFacAndStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
