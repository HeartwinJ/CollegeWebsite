import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EeeLabComponent } from './eee-lab.component';

describe('EeeLabComponent', () => {
  let component: EeeLabComponent;
  let fixture: ComponentFixture<EeeLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EeeLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EeeLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
