import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EELabComponent } from './eelab.component';

describe('EELabComponent', () => {
  let component: EELabComponent;
  let fixture: ComponentFixture<EELabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EELabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EELabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
