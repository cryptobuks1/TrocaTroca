import { TestBed } from '@angular/core/testing';

import { UnitDeleteService } from './unit-delete.service';

describe('UnitDeleteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnitDeleteService = TestBed.get(UnitDeleteService);
    expect(service).toBeTruthy();
  });
});
