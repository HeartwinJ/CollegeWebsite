import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ECHomeComponent } from './echome.component';

describe('ECHomeComponent', () => {
  let component: ECHomeComponent;
  let fixture: ComponentFixture<ECHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ECHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ECHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
