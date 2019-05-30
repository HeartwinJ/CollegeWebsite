import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicsAndCommunicationEngineeringComponent } from './electronics-and-communication-engineering.component';

describe('ElectronicsAndCommunicationEngineeringComponent', () => {
  let component: ElectronicsAndCommunicationEngineeringComponent;
  let fixture: ComponentFixture<ElectronicsAndCommunicationEngineeringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectronicsAndCommunicationEngineeringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicsAndCommunicationEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
