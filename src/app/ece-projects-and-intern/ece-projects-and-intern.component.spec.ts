import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EceProjectsAndInternComponent } from './ece-projects-and-intern.component';

describe('EceProjectsAndInternComponent', () => {
  let component: EceProjectsAndInternComponent;
  let fixture: ComponentFixture<EceProjectsAndInternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EceProjectsAndInternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EceProjectsAndInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
