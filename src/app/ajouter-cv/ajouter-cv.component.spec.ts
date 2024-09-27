import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterCvComponent } from './ajouter-cv.component';

describe('AjouterCvComponent', () => {
  let component: AjouterCvComponent;
  let fixture: ComponentFixture<AjouterCvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterCvComponent]
    });
    fixture = TestBed.createComponent(AjouterCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
