import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FpEceComponent } from './fp-ece.component';

describe('FpEceComponent', () => {
  let component: FpEceComponent;
  let fixture: ComponentFixture<FpEceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FpEceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FpEceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
