import { TestBed } from '@angular/core/testing';

import { SectorInsertService } from './sector-insert.service';

describe('SectorInsertService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SectorInsertService = TestBed.get(SectorInsertService);
    expect(service).toBeTruthy();
  });
});
