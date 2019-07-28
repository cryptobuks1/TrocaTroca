import { TestBed } from '@angular/core/testing';

import { UnitHttpService } from './unit-http.service';

describe('UnitHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnitHttpService = TestBed.get(UnitHttpService);
    expect(service).toBeTruthy();
  });
});
