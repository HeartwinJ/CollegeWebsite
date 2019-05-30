import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilEventsComponent } from './civil-events.component';

describe('CivilEventsComponent', () => {
  let component: CivilEventsComponent;
  let fixture: ComponentFixture<CivilEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CivilEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CivilEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
