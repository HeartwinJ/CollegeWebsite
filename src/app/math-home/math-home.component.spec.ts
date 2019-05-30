import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathHomeComponent } from './math-home.component';

describe('MathHomeComponent', () => {
  let component: MathHomeComponent;
  let fixture: ComponentFixture<MathHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
