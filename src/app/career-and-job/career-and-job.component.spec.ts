import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerAndJobComponent } from './career-and-job.component';

describe('CareerAndJobComponent', () => {
  let component: CareerAndJobComponent;
  let fixture: ComponentFixture<CareerAndJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerAndJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerAndJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
