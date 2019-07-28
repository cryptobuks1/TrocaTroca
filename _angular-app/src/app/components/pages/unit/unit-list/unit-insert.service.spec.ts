import { TestBed } from '@angular/core/testing';

import { UnitInsertService } from './unit-insert.service';

describe('UnitInsertService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnitInsertService = TestBed.get(UnitInsertService);
    expect(service).toBeTruthy();
  });
});
