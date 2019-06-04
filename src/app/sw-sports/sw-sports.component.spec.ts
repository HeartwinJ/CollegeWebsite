import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwSportsComponent } from './sw-sports.component';

describe('SwSportsComponent', () => {
  let component: SwSportsComponent;
  let fixture: ComponentFixture<SwSportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwSportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwSportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
