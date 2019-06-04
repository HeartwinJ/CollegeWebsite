import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwAboutComponent } from './sw-about.component';

describe('SwAboutComponent', () => {
  let component: SwAboutComponent;
  let fixture: ComponentFixture<SwAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
