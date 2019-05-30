import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemSyllabusComponent } from './chem-syllabus.component';

describe('ChemSyllabusComponent', () => {
  let component: ChemSyllabusComponent;
  let fixture: ComponentFixture<ChemSyllabusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChemSyllabusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChemSyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
