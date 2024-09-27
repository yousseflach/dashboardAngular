import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeprogressComponent } from './demandeprogress.component';

describe('DemandeprogressComponent', () => {
  let component: DemandeprogressComponent;
  let fixture: ComponentFixture<DemandeprogressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemandeprogressComponent]
    });
    fixture = TestBed.createComponent(DemandeprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
