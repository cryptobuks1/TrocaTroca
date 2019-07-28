import { TestBed } from '@angular/core/testing';

import { SectorHttpService } from './sector-http.service';

describe('SectorHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SectorHttpService = TestBed.get(SectorHttpService);
    expect(service).toBeTruthy();
  });
});
