import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardChamadosComponent } from './chamados/components/card-chamados/card-chamados.component';
import { ButtonComponent } from "./shared/components/button/button.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [
    CardChamadosComponent,
    ButtonComponent
],
})

export class App {
  protected readonly title = signal('gerenciamento-chamados');
}
