import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceProjectsAndInternComponent } from './science-projects-and-intern.component';

describe('ScienceProjectsAndInternComponent', () => {
  let component: ScienceProjectsAndInternComponent;
  let fixture: ComponentFixture<ScienceProjectsAndInternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScienceProjectsAndInternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScienceProjectsAndInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
