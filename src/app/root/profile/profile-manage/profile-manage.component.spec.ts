import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileManageComponent } from './profile-manage.component';

describe('ProfileManageComponent', () => {
  let component: ProfileManageComponent;
  let fixture: ComponentFixture<ProfileManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
