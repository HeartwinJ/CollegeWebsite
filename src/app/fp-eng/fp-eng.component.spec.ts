import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FpEngComponent } from './fp-eng.component';

describe('FpEngComponent', () => {
  let component: FpEngComponent;
  let fixture: ComponentFixture<FpEngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FpEngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FpEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
