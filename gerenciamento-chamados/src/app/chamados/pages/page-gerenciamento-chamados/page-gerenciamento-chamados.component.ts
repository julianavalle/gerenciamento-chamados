import { IChamado } from '../../../shared/models/chamado.model';
import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { BlocosChamadosComponent } from '../../components/blocos-chamados/blocos-chamados.component';
import { CardChamadosComponent } from '../../components/card-chamados/card-chamados.component';
import { ChamadosMockService } from '../../../services/chamados-mock.service';

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
  constructor(
    private router: Router,
    private chamadosService: ChamadosMockService
  ) {}

  chamadosNaoAtendidos = computed(() => this.chamadosService.byStatus('ATENDER'));
  chamadosEmAndamento = computed(() => this.chamadosService.byStatus('ANDAMENTO'));
  chamadosFinalizados = computed(() => this.chamadosService.byStatus('FINALIZADO'));

  criarNovoChamado(): void {
    this.router.navigate(['/chamados/novo']);
  }

  editarChamado(chamado: IChamado): void {
    this.router.navigate(['/chamados', chamado.id, 'editar']);
  }

  removerChamado(id: number): void {
    this.chamadosService.remove(id);
  }
}
