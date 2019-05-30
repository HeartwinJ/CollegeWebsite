import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechEventsComponent } from './mech-events.component';

describe('MechEventsComponent', () => {
  let component: MechEventsComponent;
  let fixture: ComponentFixture<MechEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MechEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
