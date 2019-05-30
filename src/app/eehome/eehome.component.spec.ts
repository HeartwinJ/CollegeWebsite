import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EEHomeComponent } from './eehome.component';

describe('EEHomeComponent', () => {
  let component: EEHomeComponent;
  let fixture: ComponentFixture<EEHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EEHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EEHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
