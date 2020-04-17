import { TestBed } from '@angular/core/testing';

import { LearnMaterialRepositoryService } from './learn-material-repository.service';

describe('LearnMaterialRepositoryService', () => {
  let service: LearnMaterialRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LearnMaterialRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
