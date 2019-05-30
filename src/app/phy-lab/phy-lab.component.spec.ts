import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhyLabComponent } from './phy-lab.component';

describe('PhyLabComponent', () => {
  let component: PhyLabComponent;
  let fixture: ComponentFixture<PhyLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhyLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhyLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
