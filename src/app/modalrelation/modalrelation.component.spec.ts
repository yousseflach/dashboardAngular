import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalrelationComponent } from './modalrelation.component';

describe('ModalrelationComponent', () => {
  let component: ModalrelationComponent;
  let fixture: ComponentFixture<ModalrelationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalrelationComponent]
    });
    fixture = TestBed.createComponent(ModalrelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
