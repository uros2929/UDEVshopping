import { TestBed } from '@angular/core/testing';

import { ProductsObjectsService } from './products-objects.service';

describe('ProductsObjectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductsObjectsService = TestBed.get(ProductsObjectsService);
    expect(service).toBeTruthy();
  });
});
