import { TestBed } from '@angular/core/testing';

import { MainService } from './main.service';

describe('MainServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainService = TestBed.get(MainService);
    expect(service).toBeTruthy();
  });
});
