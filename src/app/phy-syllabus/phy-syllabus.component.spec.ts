import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhySyllabusComponent } from './phy-syllabus.component';

describe('PhySyllabusComponent', () => {
  let component: PhySyllabusComponent;
  let fixture: ComponentFixture<PhySyllabusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhySyllabusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhySyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
