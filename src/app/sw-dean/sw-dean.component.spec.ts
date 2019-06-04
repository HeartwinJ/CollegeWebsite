import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwDeanComponent } from './sw-dean.component';

describe('SwDeanComponent', () => {
  let component: SwDeanComponent;
  let fixture: ComponentFixture<SwDeanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwDeanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwDeanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
