import { TestBed } from '@angular/core/testing';

import { TruckDataService } from './truck-data.service';

describe('InMemoryDataService', () => {
  let service: TruckDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TruckDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
