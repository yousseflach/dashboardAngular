import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletinpageComponent } from './bulletinpage.component';

describe('BulletinpageComponent', () => {
  let component: BulletinpageComponent;
  let fixture: ComponentFixture<BulletinpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BulletinpageComponent]
    });
    fixture = TestBed.createComponent(BulletinpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
