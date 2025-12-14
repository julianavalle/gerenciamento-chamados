import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { BlocosChamadosComponent } from '../../components/blocos-chamados/blocos-chamados.component';
import { CardChamadosComponent } from '../../components/card-chamados/card-chamados.component';

@Component({
  selector: 'app-page-gerenciamento-chamados',
  templateUrl: './page-gerenciamento-chamados.component.html',
  styleUrl: './page-gerenciamento-chamados.component.scss',
  standalone: true, 
  imports: [
    CommonModule,
    ButtonComponent,
    BlocosChamadosComponent,
    CardChamadosComponent,
  ],
})
export class PageGerenciamentoChamadosComponent {
  chamadosNaoAtendidos = [
    { id: 1, titulo: 'Chamado 1', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent semper, leo non feugiat dignissim, libero ex commodo nisl, a lacinia est risus vehicula.'},
    { id: 2, titulo: 'Chamado 2', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent semper, leo non feugiat dignissim, libero ex commodo nisl, a lacinia est risus vehicula.' }
  ];

  chamadosEmAndamento = [
    { id: 3, titulo: 'Chamado 3', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent semper, leo non feugiat dignissim, libero ex commodo nisl, a lacinia est risus vehicula.' }
  ];

  chamadosFinalizados = [
    { id: 4, titulo: 'Chamado 4', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent semper, leo non feugiat dignissim, libero ex commodo nisl, a lacinia est risus vehicula.' }
  ];

}
