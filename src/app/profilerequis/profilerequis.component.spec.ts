import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilerequisComponent } from './profilerequis.component';

describe('ProfilerequisComponent', () => {
  let component: ProfilerequisComponent;
  let fixture: ComponentFixture<ProfilerequisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilerequisComponent]
    });
    fixture = TestBed.createComponent(ProfilerequisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
