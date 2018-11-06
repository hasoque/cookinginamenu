import { TestBed } from '@angular/core/testing';

import { ReviewsDataService } from './reviews-data.service';

describe('ReviewsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReviewsDataService = TestBed.get(ReviewsDataService);
    expect(service).toBeTruthy();
  });
});
