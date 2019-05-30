import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhyHomeComponent } from './phy-home.component';

describe('PhyHomeComponent', () => {
  let component: PhyHomeComponent;
  let fixture: ComponentFixture<PhyHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhyHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
