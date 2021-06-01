import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastComponent } from './forecast.component';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import { HttpClientModule } from '../../../node_modules/@angular/common/http';

describe('ForecastComponent', () => {
  let component: ForecastComponent;
  let fixture: ComponentFixture<ForecastComponent>;
  const fakeActivatedRoute={
    snapshot:{data:{}}
  } as ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers:[{provide:Router,useValue:class{}},{provide:ActivatedRoute,useValue:fakeActivatedRoute}],
      declarations: [ ForecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
