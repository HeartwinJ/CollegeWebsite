import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EeeEventsComponent } from './eee-events.component';

describe('EeeEventsComponent', () => {
  let component: EeeEventsComponent;
  let fixture: ComponentFixture<EeeEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EeeEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EeeEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
