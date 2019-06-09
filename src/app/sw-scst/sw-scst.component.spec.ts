import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwScstComponent } from './sw-scst.component';

describe('SwScstComponent', () => {
  let component: SwScstComponent;
  let fixture: ComponentFixture<SwScstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwScstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwScstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
