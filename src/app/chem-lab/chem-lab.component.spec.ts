import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemLabComponent } from './chem-lab.component';

describe('ChemLabComponent', () => {
  let component: ChemLabComponent;
  let fixture: ComponentFixture<ChemLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChemLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChemLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
