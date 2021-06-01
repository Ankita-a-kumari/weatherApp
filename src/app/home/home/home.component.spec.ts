import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '../../../../node_modules/@angular/common/http';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { RouterTestingModule } from '../../../../node_modules/@angular/router/testing';
import { Observable } from '../../../../node_modules/rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

const fakeActivatedRoute={
  snapshot:{data:{}}
} as ActivatedRoute;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,RouterTestingModule],
      providers:[{provide:ActivatedRoute,useValue:fakeActivatedRoute}],
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('cities create', () => {
    expect(component.cityTiles).toBeTruthy();
  });

});
