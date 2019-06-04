import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAnnualReportComponent } from './admin-annual-report.component';

describe('AdminAnnualReportComponent', () => {
  let component: AdminAnnualReportComponent;
  let fixture: ComponentFixture<AdminAnnualReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAnnualReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAnnualReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
