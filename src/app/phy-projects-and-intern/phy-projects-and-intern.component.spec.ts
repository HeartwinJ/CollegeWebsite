import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhyProjectsAndInternComponent } from './phy-projects-and-intern.component';

describe('PhyProjectsAndInternComponent', () => {
  let component: PhyProjectsAndInternComponent;
  let fixture: ComponentFixture<PhyProjectsAndInternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhyProjectsAndInternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhyProjectsAndInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
