import { TestBed } from '@angular/core/testing';

import { PersonelInfoService } from './personel-info.service';

describe('PersonelInfoService', () => {
  let service: PersonelInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonelInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
