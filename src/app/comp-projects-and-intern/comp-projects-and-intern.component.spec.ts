import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompProjectsAndInternComponent } from './comp-projects-and-intern.component';

describe('CompProjectsAndInternComponent', () => {
  let component: CompProjectsAndInternComponent;
  let fixture: ComponentFixture<CompProjectsAndInternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompProjectsAndInternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompProjectsAndInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
