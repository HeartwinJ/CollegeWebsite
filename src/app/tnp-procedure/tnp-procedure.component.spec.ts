import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TnpProcedureComponent } from './tnp-procedure.component';

describe('TnpProcedureComponent', () => {
  let component: TnpProcedureComponent;
  let fixture: ComponentFixture<TnpProcedureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TnpProcedureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TnpProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
