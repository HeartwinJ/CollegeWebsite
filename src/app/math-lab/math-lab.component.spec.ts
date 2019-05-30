import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathLabComponent } from './math-lab.component';

describe('MathLabComponent', () => {
  let component: MathLabComponent;
  let fixture: ComponentFixture<MathLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
