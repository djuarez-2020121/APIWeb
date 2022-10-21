import { TestBed } from '@angular/core/testing';

import { ProductosServService } from './productos-serv.service';

describe('ProductosServService', () => {
  let service: ProductosServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductosServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
