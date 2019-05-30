import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceEventsComponent } from './science-events.component';

describe('ScienceEventsComponent', () => {
  let component: ScienceEventsComponent;
  let fixture: ComponentFixture<ScienceEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScienceEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScienceEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
