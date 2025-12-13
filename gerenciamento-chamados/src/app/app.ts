import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardChamadosComponent } from './chamados/components/card-chamados/card-chamados.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [
    CardChamadosComponent,
  ],
})

export class App {
  protected readonly title = signal('gerenciamento-chamados');
}
