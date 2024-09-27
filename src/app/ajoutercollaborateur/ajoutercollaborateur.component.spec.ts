import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutercollaborateurComponent } from './ajoutercollaborateur.component';

describe('AjoutercollaborateurComponent', () => {
  let component: AjoutercollaborateurComponent;
  let fixture: ComponentFixture<AjoutercollaborateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutercollaborateurComponent]
    });
    fixture = TestBed.createComponent(AjoutercollaborateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
