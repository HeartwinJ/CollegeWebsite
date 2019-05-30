import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompFacAndStaffComponent } from './comp-fac-and-staff.component';

describe('CompFacAndStaffComponent', () => {
  let component: CompFacAndStaffComponent;
  let fixture: ComponentFixture<CompFacAndStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompFacAndStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompFacAndStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
