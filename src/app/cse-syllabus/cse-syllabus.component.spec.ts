import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CseSyllabusComponent } from './cse-syllabus.component';

describe('CseSyllabusComponent', () => {
  let component: CseSyllabusComponent;
  let fixture: ComponentFixture<CseSyllabusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CseSyllabusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CseSyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
