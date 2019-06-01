import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicFeeDetailsComponent } from './academic-fee-details.component';

describe('AcademicFeeDetailsComponent', () => {
  let component: AcademicFeeDetailsComponent;
  let fixture: ComponentFixture<AcademicFeeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicFeeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicFeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
