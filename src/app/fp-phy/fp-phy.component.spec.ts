import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FpPhyComponent } from './fp-phy.component';

describe('FpPhyComponent', () => {
  let component: FpPhyComponent;
  let fixture: ComponentFixture<FpPhyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FpPhyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FpPhyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
