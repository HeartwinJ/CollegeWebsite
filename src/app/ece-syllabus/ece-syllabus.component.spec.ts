import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EceSyllabusComponent } from './ece-syllabus.component';

describe('EceSyllabusComponent', () => {
  let component: EceSyllabusComponent;
  let fixture: ComponentFixture<EceSyllabusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EceSyllabusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EceSyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
