import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompLabComponent } from './comp-lab.component';

describe('CompLabComponent', () => {
  let component: CompLabComponent;
  let fixture: ComponentFixture<CompLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
