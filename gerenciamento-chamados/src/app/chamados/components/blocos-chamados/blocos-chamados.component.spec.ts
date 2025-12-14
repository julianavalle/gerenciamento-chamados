import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocosChamadosComponent } from './blocos-chamados.component';

describe('BlocosChamadosComponent', () => {
  let component: BlocosChamadosComponent;
  let fixture: ComponentFixture<BlocosChamadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlocosChamadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlocosChamadosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
