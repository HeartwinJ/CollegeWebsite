import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathEventsComponent } from './math-events.component';

describe('MathEventsComponent', () => {
  let component: MathEventsComponent;
  let fixture: ComponentFixture<MathEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
