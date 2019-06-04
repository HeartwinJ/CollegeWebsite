import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwCulturalsComponent } from './sw-culturals.component';

describe('SwCulturalsComponent', () => {
  let component: SwCulturalsComponent;
  let fixture: ComponentFixture<SwCulturalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwCulturalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwCulturalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
