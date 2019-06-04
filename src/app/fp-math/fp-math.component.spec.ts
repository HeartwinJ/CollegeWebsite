import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FpMathComponent } from './fp-math.component';

describe('FpMathComponent', () => {
  let component: FpMathComponent;
  let fixture: ComponentFixture<FpMathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FpMathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FpMathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
