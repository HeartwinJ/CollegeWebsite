import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingAndPlacementComponent } from './training-and-placement.component';

describe('TrainingAndPlacementComponent', () => {
  let component: TrainingAndPlacementComponent;
  let fixture: ComponentFixture<TrainingAndPlacementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingAndPlacementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingAndPlacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
