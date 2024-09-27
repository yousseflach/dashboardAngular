import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecrutementlistComponent } from './recrutementlist.component';

describe('RecrutementlistComponent', () => {
  let component: RecrutementlistComponent;
  let fixture: ComponentFixture<RecrutementlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecrutementlistComponent]
    });
    fixture = TestBed.createComponent(RecrutementlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
