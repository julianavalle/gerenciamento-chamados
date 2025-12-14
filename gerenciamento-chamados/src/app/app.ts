import { Component, signal } from '@angular/core';
import { PageGerenciamentoChamadosComponent } from "./chamados/pages/page-gerenciamento-chamados.component/page-gerenciamento-chamados.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [
    PageGerenciamentoChamadosComponent
],
})

export class App {
  protected readonly title = signal('gerenciamento-chamados');
  
}
