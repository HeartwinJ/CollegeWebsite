import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ECProjectsAndInternComponent } from './ecprojects-and-intern.component';

describe('ECProjectsAndInterComponent', () => {
  let component: ECProjectsAndInternComponent;
  let fixture: ComponentFixture<ECProjectsAndInternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ECProjectsAndInternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ECProjectsAndInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
