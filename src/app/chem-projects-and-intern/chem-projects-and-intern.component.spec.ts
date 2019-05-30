import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemProjectsAndInternComponent } from './chem-projects-and-intern.component';

describe('ChemProjectsAndInternComponent', () => {
  let component: ChemProjectsAndInternComponent;
  let fixture: ComponentFixture<ChemProjectsAndInternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChemProjectsAndInternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChemProjectsAndInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
