import { TestBed } from '@angular/core/testing';

import { RouteGaurdGuard } from './route-gaurd.guard';
import { Router } from '../../../node_modules/@angular/router';

describe('RouteGaurdGuard', () => {
  let guard: RouteGaurdGuard;
  beforeEach(() => {
    TestBed.configureTestingModule({
    providers:[{provide:Router,useValue:class{}}]
    });
    guard = TestBed.inject(RouteGaurdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
