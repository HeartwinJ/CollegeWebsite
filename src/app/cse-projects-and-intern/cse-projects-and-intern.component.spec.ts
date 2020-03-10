import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CseProjectsAndInternComponent } from './cse-projects-and-intern.component';

describe('CseProjectsAndInternComponent', () => {
  let component: CseProjectsAndInternComponent;
  let fixture: ComponentFixture<CseProjectsAndInternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CseProjectsAndInternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CseProjectsAndInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
