import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EceFacAndStaffComponent } from './ece-fac-and-staff.component';

describe('EceFacAndStaffComponent', () => {
  let component: EceFacAndStaffComponent;
  let fixture: ComponentFixture<EceFacAndStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EceFacAndStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EceFacAndStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
