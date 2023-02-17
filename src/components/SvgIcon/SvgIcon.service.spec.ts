import { TestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { SvgIconService } from './SvgIcon.service';

describe('SvgIconService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler, SvgIconService]
    });
  });

  it('should create', inject([SvgIconService], (service: SvgIconService) => {
    expect(service).toBeTruthy();
  }));
});
