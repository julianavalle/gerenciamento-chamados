import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCriacaoEdicaoChamadosComponent } from './page-criacao-edicao-chamados.component';

describe('PageCriacaoEdicaoChamadosComponent', () => {
  let component: PageCriacaoEdicaoChamadosComponent;
  let fixture: ComponentFixture<PageCriacaoEdicaoChamadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCriacaoEdicaoChamadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCriacaoEdicaoChamadosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
