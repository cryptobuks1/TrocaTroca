import { TestBed } from '@angular/core/testing';

import { StatusHttpService } from './status-http.service';

describe('StatusHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatusHttpService = TestBed.get(StatusHttpService);
    expect(service).toBeTruthy();
  });
});
