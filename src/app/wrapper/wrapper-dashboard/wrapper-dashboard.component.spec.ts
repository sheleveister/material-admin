import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperDashboardComponent } from './wrapper-dashboard.component';

describe('WrapperDashboardComponent', () => {
  let component: WrapperDashboardComponent;
  let fixture: ComponentFixture<WrapperDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrapperDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
