import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompHomeComponent } from './comp-home.component';

describe('CompHomeComponent', () => {
  let component: CompHomeComponent;
  let fixture: ComponentFixture<CompHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
