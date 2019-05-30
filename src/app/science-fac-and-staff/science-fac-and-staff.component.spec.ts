import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceFacAndStaffComponent } from './science-fac-and-staff.component';

describe('ScienceFacAndStaffComponent', () => {
  let component: ScienceFacAndStaffComponent;
  let fixture: ComponentFixture<ScienceFacAndStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScienceFacAndStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScienceFacAndStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
