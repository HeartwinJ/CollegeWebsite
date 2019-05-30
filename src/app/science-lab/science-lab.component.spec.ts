import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceLabComponent } from './science-lab.component';

describe('ScienceLabComponent', () => {
  let component: ScienceLabComponent;
  let fixture: ComponentFixture<ScienceLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScienceLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScienceLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
