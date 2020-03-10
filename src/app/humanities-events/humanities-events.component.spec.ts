import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanitiesEventsComponent } from './humanities-events.component';

describe('HumanitiesEventsComponent', () => {
  let component: HumanitiesEventsComponent;
  let fixture: ComponentFixture<HumanitiesEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumanitiesEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanitiesEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
