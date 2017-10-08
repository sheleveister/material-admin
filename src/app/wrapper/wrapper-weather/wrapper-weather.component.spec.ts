import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperWeatherComponent } from './wrapper-weather.component';

describe('WrapperWeatherComponent', () => {
  let component: WrapperWeatherComponent;
  let fixture: ComponentFixture<WrapperWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrapperWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
