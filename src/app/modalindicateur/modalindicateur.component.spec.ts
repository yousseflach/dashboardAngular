import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalindicateurComponent } from './modalindicateur.component';

describe('ModalindicateurComponent', () => {
  let component: ModalindicateurComponent;
  let fixture: ComponentFixture<ModalindicateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalindicateurComponent]
    });
    fixture = TestBed.createComponent(ModalindicateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
