import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemEventsComponent } from './chem-events.component';

describe('ChemEventsComponent', () => {
  let component: ChemEventsComponent;
  let fixture: ComponentFixture<ChemEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChemEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChemEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
