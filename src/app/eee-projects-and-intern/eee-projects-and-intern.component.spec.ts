import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EeeProjectsAndInternComponent } from './eee-projects-and-intern.component';

describe('EeeProjectsAndInternComponent', () => {
  let component: EeeProjectsAndInternComponent;
  let fixture: ComponentFixture<EeeProjectsAndInternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EeeProjectsAndInternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EeeProjectsAndInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
