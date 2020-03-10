import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanitiesHomeComponent } from './humanities-home.component';

describe('HumanitiesHomeComponent', () => {
  let component: HumanitiesHomeComponent;
  let fixture: ComponentFixture<HumanitiesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumanitiesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanitiesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
