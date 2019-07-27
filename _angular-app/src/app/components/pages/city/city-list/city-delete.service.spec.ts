import { TestBed } from '@angular/core/testing';

import { CityDeleteService } from './city-delete.service';

describe('CityDeleteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CityDeleteService = TestBed.get(CityDeleteService);
    expect(service).toBeTruthy();
  });
});
