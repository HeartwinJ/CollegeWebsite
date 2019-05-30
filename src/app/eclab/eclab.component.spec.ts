import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ECLabComponent } from './eclab.component';

describe('ECLabComponent', () => {
  let component: ECLabComponent;
  let fixture: ComponentFixture<ECLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ECLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ECLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
