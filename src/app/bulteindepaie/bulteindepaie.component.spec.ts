import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulteindepaieComponent } from './bulteindepaie.component';

describe('BulteindepaieComponent', () => {
  let component: BulteindepaieComponent;
  let fixture: ComponentFixture<BulteindepaieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BulteindepaieComponent]
    });
    fixture = TestBed.createComponent(BulteindepaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
