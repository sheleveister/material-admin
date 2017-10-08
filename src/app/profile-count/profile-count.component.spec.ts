import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCountComponent } from './profile-count.component';

describe('ProfileCountComponent', () => {
  let component: ProfileCountComponent;
  let fixture: ComponentFixture<ProfileCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
