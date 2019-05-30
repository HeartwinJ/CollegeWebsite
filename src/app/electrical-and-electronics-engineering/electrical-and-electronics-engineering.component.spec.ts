import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricalAndElectronicsEngineeringComponent } from './electrical-and-electronics-engineering.component';

describe('ElectricalAndElectronicsEngineeringComponent', () => {
  let component: ElectricalAndElectronicsEngineeringComponent;
  let fixture: ComponentFixture<ElectricalAndElectronicsEngineeringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectricalAndElectronicsEngineeringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricalAndElectronicsEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
