import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwUgcComponent } from './sw-ugc.component';

describe('SwUgcComponent', () => {
  let component: SwUgcComponent;
  let fixture: ComponentFixture<SwUgcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwUgcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwUgcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
