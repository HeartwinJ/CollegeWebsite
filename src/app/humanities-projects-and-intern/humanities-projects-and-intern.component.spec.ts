import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanitiesProjectsAndInternComponent } from './humanities-projects-and-intern.component';

describe('HumanitiesProjectsAndInternComponent', () => {
  let component: HumanitiesProjectsAndInternComponent;
  let fixture: ComponentFixture<HumanitiesProjectsAndInternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumanitiesProjectsAndInternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanitiesProjectsAndInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
