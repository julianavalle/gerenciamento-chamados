import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormChamadosComponent } from './form-chamados.component';

describe('FormChamadosComponent', () => {
  let component: FormChamadosComponent;
  let fixture: ComponentFixture<FormChamadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormChamadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormChamadosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
