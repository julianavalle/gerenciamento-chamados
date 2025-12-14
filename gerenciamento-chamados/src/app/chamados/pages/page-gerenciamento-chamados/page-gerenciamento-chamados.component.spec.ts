import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGerenciamentoChamadosComponent } from './page-gerenciamento-chamados.component';

describe('PageGerenciamentoChamadosComponent', () => {
  let component: PageGerenciamentoChamadosComponent;
  let fixture: ComponentFixture<PageGerenciamentoChamadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageGerenciamentoChamadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageGerenciamentoChamadosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
