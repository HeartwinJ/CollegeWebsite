import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EeeHomeComponent } from './eee-home.component';

describe('EeeHomeComponent', () => {
  let component: EeeHomeComponent;
  let fixture: ComponentFixture<EeeHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EeeHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EeeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
