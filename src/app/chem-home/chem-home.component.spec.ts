import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemHomeComponent } from './chem-home.component';

describe('ChemHomeComponent', () => {
  let component: ChemHomeComponent;
  let fixture: ComponentFixture<ChemHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChemHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChemHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
