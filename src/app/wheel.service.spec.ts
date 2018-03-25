import { TestBed, inject } from '@angular/core/testing';

import { WheelService } from './wheel.service';

describe('WheelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WheelService]
    });
  });

  it('should be created', inject([WheelService], (service: WheelService) => {
    expect(service).toBeTruthy();
  }));
});
