import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwGrievancesComponent } from './sw-grievances.component';

describe('SwGrievancesComponent', () => {
  let component: SwGrievancesComponent;
  let fixture: ComponentFixture<SwGrievancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwGrievancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwGrievancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
