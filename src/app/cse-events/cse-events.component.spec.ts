import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CseEventsComponent } from './cse-events.component';

describe('CseEventsComponent', () => {
  let component: CseEventsComponent;
  let fixture: ComponentFixture<CseEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CseEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CseEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
