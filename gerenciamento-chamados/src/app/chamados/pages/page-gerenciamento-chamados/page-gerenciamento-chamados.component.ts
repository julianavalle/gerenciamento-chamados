import { IChamado } from '../../../shared/models/chamado.model';
import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { BlocosChamadosComponent } from '../../components/blocos-chamados/blocos-chamados.component';
import { CardChamadosComponent } from '../../components/card-chamados/card-chamados.component';
import { ChamadosMockService } from '../../../services/chamados-mock.service';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';
import { ConfirmDialogService } from '../../../shared/components/confirm-dialog/confirm-dialog.service';
import { ToastService } from '../../../shared/components/toast/toast.service';

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
    ConfirmDialogComponent,
  ],
})
export class PageGerenciamentoChamadosComponent {
  constructor(
    private router: Router,
    private chamadosService: ChamadosMockService,
    private confirmDialogService: ConfirmDialogService,
    private toastService: ToastService
  ) {}

  chamadosNaoAtendidos = computed(() => this.chamadosService.byStatus('ATENDER'));
  chamadosEmAndamento = computed(() => this.chamadosService.byStatus('ANDAMENTO'));
  chamadosFinalizados = computed(() => this.chamadosService.byStatus('FINALIZADO'));

  public criarNovoChamado(): void {
    this.router.navigate(['/chamados/novo']);
  }

  public editarChamado(chamado: IChamado): void {
    this.router.navigate(['/chamados', chamado.id, 'editar']);
  }

  public removerChamado(id: number): void {
    this.confirmDialogService.confirm({
      header: 'Excluir chamado?',
      message: 'Tem certeza que deseja excluir este chamado?',
      acceptLabel: 'Sim, excluir',
      rejectLabel: 'Cancelar',
      onAccept: () => {
        this.chamadosService.remove(id);
        this.toastService.success('Chamado excluído com sucesso!');
      }
    });
  }
}
