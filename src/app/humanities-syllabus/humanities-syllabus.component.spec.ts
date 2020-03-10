import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanitiesSyllabusComponent } from './humanities-syllabus.component';

describe('HumanitiesSyllabusComponent', () => {
  let component: HumanitiesSyllabusComponent;
  let fixture: ComponentFixture<HumanitiesSyllabusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumanitiesSyllabusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanitiesSyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
