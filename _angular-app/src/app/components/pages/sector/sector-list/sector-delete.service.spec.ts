import { TestBed } from '@angular/core/testing';

import { SectorDeleteService } from './sector-delete.service';

describe('SectorDeleteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SectorDeleteService = TestBed.get(SectorDeleteService);
    expect(service).toBeTruthy();
  });
});
