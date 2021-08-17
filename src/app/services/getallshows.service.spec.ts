import { TestBed } from '@angular/core/testing';

import { GetAllShows } from './getallshows.service';

describe('GetAllShows', () => {
  let service: GetAllShows;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllShows);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
