import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FpMechComponent } from './fp-mech.component';

describe('FpMechComponent', () => {
  let component: FpMechComponent;
  let fixture: ComponentFixture<FpMechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FpMechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FpMechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
