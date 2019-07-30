import { TestBed } from '@angular/core/testing';

import { TypeHttpService } from './type-http.service';

describe('TypeHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeHttpService = TestBed.get(TypeHttpService);
    expect(service).toBeTruthy();
  });
});
