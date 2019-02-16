import { TestBed } from '@angular/core/testing';

import { ModalsForResponsiveService } from './modals-for-responsive.service';

describe('ModalsForResponsiveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalsForResponsiveService = TestBed.get(ModalsForResponsiveService);
    expect(service).toBeTruthy();
  });
});
