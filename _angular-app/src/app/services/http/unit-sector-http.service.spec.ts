import { TestBed } from '@angular/core/testing';

import { UnitSectorHttpService } from './unit-sector-http.service';

describe('UnitSectorHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnitSectorHttpService = TestBed.get(UnitSectorHttpService);
    expect(service).toBeTruthy();
  });
});
