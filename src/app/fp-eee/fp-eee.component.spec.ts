import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FpEeeComponent } from './fp-eee.component';

describe('FpEeeComponent', () => {
  let component: FpEeeComponent;
  let fixture: ComponentFixture<FpEeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FpEeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FpEeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
