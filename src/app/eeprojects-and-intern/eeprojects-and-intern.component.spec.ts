import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EEProjectsAndInternComponent } from './eeprojects-and-intern.component';

describe('EEProjectsAndInternComponent', () => {
  let component: EEProjectsAndInternComponent;
  let fixture: ComponentFixture<EEProjectsAndInternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EEProjectsAndInternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EEProjectsAndInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
