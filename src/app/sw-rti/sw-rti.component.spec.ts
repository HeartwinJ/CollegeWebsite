import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwRtiComponent } from './sw-rti.component';

describe('SwRtiComponent', () => {
  let component: SwRtiComponent;
  let fixture: ComponentFixture<SwRtiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwRtiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwRtiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
