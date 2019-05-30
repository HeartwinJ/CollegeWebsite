import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ECSyllabusComponent } from './ecsyllabus.component';

describe('ECSyllabusComponent', () => {
  let component: ECSyllabusComponent;
  let fixture: ComponentFixture<ECSyllabusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ECSyllabusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ECSyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
