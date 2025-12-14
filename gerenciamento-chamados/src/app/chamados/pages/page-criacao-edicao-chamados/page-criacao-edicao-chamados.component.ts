import { Component } from '@angular/core';
import { FormChamadosComponent } from "../../components/form-chamados/form-chamados.component";

@Component({
  selector: 'app-page-criacao-edicao-chamados',
  templateUrl: './page-criacao-edicao-chamados.component.html',
  styleUrl: './page-criacao-edicao-chamados.component.scss',
  standalone: true,
  imports: [
    FormChamadosComponent
],
})
export class PageCriacaoEdicaoChamadosComponent {

}
