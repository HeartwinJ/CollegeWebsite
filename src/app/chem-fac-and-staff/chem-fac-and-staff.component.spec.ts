import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemFacAndStaffComponent } from './chem-fac-and-staff.component';

describe('ChemFacAndStaffComponent', () => {
  let component: ChemFacAndStaffComponent;
  let fixture: ComponentFixture<ChemFacAndStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChemFacAndStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChemFacAndStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
