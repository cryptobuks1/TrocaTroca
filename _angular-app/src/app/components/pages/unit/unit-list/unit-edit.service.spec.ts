import { TestBed } from '@angular/core/testing';

import { UnitEditService } from './unit-edit.service';

describe('UnitEditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnitEditService = TestBed.get(UnitEditService);
    expect(service).toBeTruthy();
  });
});
