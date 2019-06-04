import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FpChemComponent } from './fp-chem.component';

describe('FpChemComponent', () => {
  let component: FpChemComponent;
  let fixture: ComponentFixture<FpChemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FpChemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FpChemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
