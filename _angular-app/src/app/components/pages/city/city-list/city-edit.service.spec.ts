import { TestBed } from '@angular/core/testing';

import { CityEditService } from './city-edit.service';

describe('CityEditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CityEditService = TestBed.get(CityEditService);
    expect(service).toBeTruthy();
  });
});
