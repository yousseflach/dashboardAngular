import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterstagiaireComponent } from './ajouterstagiaire.component';

describe('AjouterstagiaireComponent', () => {
  let component: AjouterstagiaireComponent;
  let fixture: ComponentFixture<AjouterstagiaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterstagiaireComponent]
    });
    fixture = TestBed.createComponent(AjouterstagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
