import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CseHomeComponent } from './cse-home.component';

describe('CseHomeComponent', () => {
  let component: CseHomeComponent;
  let fixture: ComponentFixture<CseHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CseHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CseHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
