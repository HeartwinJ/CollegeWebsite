import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NadComponent } from './nad.component';

describe('NadComponent', () => {
  let component: NadComponent;
  let fixture: ComponentFixture<NadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
