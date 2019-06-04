import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwSGIComponent } from './sw-sgi.component';

describe('SwSGIComponent', () => {
  let component: SwSGIComponent;
  let fixture: ComponentFixture<SwSGIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwSGIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwSGIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
