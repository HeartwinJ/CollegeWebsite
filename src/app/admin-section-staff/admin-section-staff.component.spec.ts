import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSectionStaffComponent } from './admin-section-staff.component';

describe('AdminSectionStaffComponent', () => {
  let component: AdminSectionStaffComponent;
  let fixture: ComponentFixture<AdminSectionStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSectionStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSectionStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
