import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FpCivilComponent } from './fp-civil.component';

describe('FpCivilComponent', () => {
  let component: FpCivilComponent;
  let fixture: ComponentFixture<FpCivilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FpCivilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FpCivilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
