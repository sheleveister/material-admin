import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperCardsComponent } from './wrapper-cards.component';

describe('WrapperCardsComponent', () => {
  let component: WrapperCardsComponent;
  let fixture: ComponentFixture<WrapperCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrapperCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
