import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CseLabComponent } from './cse-lab.component';

describe('CseLabComponent', () => {
  let component: CseLabComponent;
  let fixture: ComponentFixture<CseLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CseLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CseLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
