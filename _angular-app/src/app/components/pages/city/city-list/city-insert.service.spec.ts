import { TestBed } from '@angular/core/testing';

import { CityInsertService } from './city-insert.service';

describe('CityInsertService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CityInsertService = TestBed.get(CityInsertService);
    expect(service).toBeTruthy();
  });
});
