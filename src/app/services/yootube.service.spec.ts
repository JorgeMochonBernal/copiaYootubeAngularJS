import { TestBed } from '@angular/core/testing';

import { YootubeService } from './yootube.service';

describe('YootubeService', () => {
  let service: YootubeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YootubeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
