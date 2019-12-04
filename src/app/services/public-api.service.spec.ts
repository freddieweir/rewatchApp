import { TestBed } from '@angular/core/testing';

import { PublicAPIService } from './public-api.service';

describe('PublicAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PublicAPIService = TestBed.get(PublicAPIService);
    expect(service).toBeTruthy();
  });
});
