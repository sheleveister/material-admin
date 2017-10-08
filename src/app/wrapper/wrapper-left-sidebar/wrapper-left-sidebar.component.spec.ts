import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperLeftSidebarComponent } from './wrapper-left-sidebar.component';

describe('WrapperLeftSidebarComponent', () => {
  let component: WrapperLeftSidebarComponent;
  let fixture: ComponentFixture<WrapperLeftSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrapperLeftSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperLeftSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
