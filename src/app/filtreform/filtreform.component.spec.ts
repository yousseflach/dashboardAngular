import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltreformComponent } from './filtreform.component';

describe('FiltreformComponent', () => {
  let component: FiltreformComponent;
  let fixture: ComponentFixture<FiltreformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltreformComponent]
    });
    fixture = TestBed.createComponent(FiltreformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
