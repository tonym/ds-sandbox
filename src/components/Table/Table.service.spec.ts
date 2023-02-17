import { TestBed, inject } from '@angular/core/testing';
import { TableService } from './Table.service';

describe('TableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TableService]
    });
  });

  it('should create', inject([TableService], (service: TableService) => {
    expect(service).toBeTruthy();
  }));
});
