import { TestBed } from '@angular/core/testing';

import { DependenciesService } from './dependencies.service';

describe('DependentService', () => {
  let service: DependenciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DependenciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
