import { TestBed } from '@angular/core/testing';

import { HomeService } from './home.service';
import { HttpClientModule } from '../../../node_modules/@angular/common/http';

describe('HomeService', () => {


  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientModule],
  }));

  it('should be created', () => {
    const service: HomeService = TestBed.get(HomeService);
    expect(service).toBeTruthy();
  });
});
