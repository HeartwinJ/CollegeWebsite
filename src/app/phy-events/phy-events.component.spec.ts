import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhyEventsComponent } from './phy-events.component';

describe('PhyEventsComponent', () => {
  let component: PhyEventsComponent;
  let fixture: ComponentFixture<PhyEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhyEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhyEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
