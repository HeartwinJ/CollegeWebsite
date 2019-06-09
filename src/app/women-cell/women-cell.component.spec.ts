import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenCellComponent } from './women-cell.component';

describe('WomenCellComponent', () => {
  let component: WomenCellComponent;
  let fixture: ComponentFixture<WomenCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
