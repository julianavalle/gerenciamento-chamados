import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormChamadosComponent } from "../../components/form-chamados/form-chamados.component";
import { IChamado, TChamadoDraft, TFormMode } from '../../../shared/models/chamado.model';
import { ChamadosMockService } from '../../../services/chamados-mock.service';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';
import { ConfirmDialogService } from '../../../shared/components/confirm-dialog/confirm-dialog.service';

@Component({
  selector: 'app-page-criacao-edicao-chamados',
  templateUrl: './page-criacao-edicao-chamados.component.html',
  styleUrl: './page-criacao-edicao-chamados.component.scss',
  standalone: true,
  imports: [
    FormChamadosComponent,
    ConfirmDialogComponent
  ],
})
export class PageCriacaoEdicaoChamadosComponent implements OnInit {
  mode: TFormMode = 'CREATE';
  chamadoInicial: IChamado | null = null;

  @ViewChild(FormChamadosComponent) formComponent!: FormChamadosComponent;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private chamadosService: ChamadosMockService,
    private confirmDialogService: ConfirmDialogService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.mode = 'EDIT';
      this.chamadoInicial = this.chamadosService.getById(Number(id));
    }
  }

  onSubmit(chamado: TChamadoDraft): void {
    if (this.mode === 'CREATE') {
      this.chamadosService.create(chamado);
    } else if (this.mode === 'EDIT' && this.chamadoInicial) {
      this.chamadosService.update(this.chamadoInicial.id, chamado);
    }
    this.voltarParaListagem();
  }

  onCancel(): void {
    if (this.formComponent.isFormDirty()) {
      this.confirmDialogService.confirm({
        header: 'Descartar preenchimento?',
        message: 'Tem certeza que deseja descartar o preenchimento?',
        acceptLabel: 'Sim, descartar',
        rejectLabel: 'Não',
        onAccept: () => {
          this.voltarParaListagem();
        }
      });
    } else {
      this.voltarParaListagem();
    }
  }

  private voltarParaListagem(): void {
    this.router.navigate(['/chamados']);
  }
}
