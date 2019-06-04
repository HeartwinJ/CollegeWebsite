import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TnpContactComponent } from './tnp-contact.component';

describe('TnpContactComponent', () => {
  let component: TnpContactComponent;
  let fixture: ComponentFixture<TnpContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TnpContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TnpContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
