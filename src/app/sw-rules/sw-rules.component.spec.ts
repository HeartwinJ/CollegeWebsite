import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwRulesComponent } from './sw-rules.component';

describe('SwRulesComponent', () => {
  let component: SwRulesComponent;
  let fixture: ComponentFixture<SwRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
