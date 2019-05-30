import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerScienceAndEngineeringComponent } from './computer-science-and-engineering.component';

describe('ComputerScienceAndEngineeringComponent', () => {
  let component: ComputerScienceAndEngineeringComponent;
  let fixture: ComponentFixture<ComputerScienceAndEngineeringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerScienceAndEngineeringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerScienceAndEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
