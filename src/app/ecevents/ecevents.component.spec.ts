import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ECEventsComponent } from './ecevents.component';

describe('ECEventsComponent', () => {
  let component: ECEventsComponent;
  let fixture: ComponentFixture<ECEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ECEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ECEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
