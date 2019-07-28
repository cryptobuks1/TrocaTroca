import { TestBed } from '@angular/core/testing';

import { SectorEditService } from './sector-edit.service';

describe('SectorEditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SectorEditService = TestBed.get(SectorEditService);
    expect(service).toBeTruthy();
  });
});
