import { Component, signal } from '@angular/core';
import { PageGerenciamentoChamadosComponent } from "./chamados/pages/page-gerenciamento-chamados/page-gerenciamento-chamados.component";
import { PageCriacaoEdicaoChamadosComponent } from "./chamados/pages/page-criacao-edicao-chamados/page-criacao-edicao-chamados.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [
    PageGerenciamentoChamadosComponent,
    PageCriacaoEdicaoChamadosComponent
],
})

export class App {
  protected readonly title = signal('gerenciamento-chamados');
  
}
