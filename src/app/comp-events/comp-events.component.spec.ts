import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompEventsComponent } from './comp-events.component';

describe('CompEventsComponent', () => {
  let component: CompEventsComponent;
  let fixture: ComponentFixture<CompEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
