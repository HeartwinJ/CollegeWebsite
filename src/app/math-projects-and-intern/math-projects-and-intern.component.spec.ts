import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathProjectsAndInternComponent } from './math-projects-and-intern.component';

describe('MathProjectsAndInternComponent', () => {
  let component: MathProjectsAndInternComponent;
  let fixture: ComponentFixture<MathProjectsAndInternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathProjectsAndInternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathProjectsAndInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
