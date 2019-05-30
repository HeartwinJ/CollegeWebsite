import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EEEventsComponent } from './eeevents.component';

describe('EEEventsComponent', () => {
  let component: EEEventsComponent;
  let fixture: ComponentFixture<EEEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EEEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EEEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
