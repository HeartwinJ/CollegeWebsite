import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FpCseComponent } from './fp-cse.component';

describe('FpCseComponent', () => {
  let component: FpCseComponent;
  let fixture: ComponentFixture<FpCseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FpCseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FpCseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
