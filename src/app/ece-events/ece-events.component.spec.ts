import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EceEventsComponent } from './ece-events.component';

describe('EceEventsComponent', () => {
  let component: EceEventsComponent;
  let fixture: ComponentFixture<EceEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EceEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EceEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
