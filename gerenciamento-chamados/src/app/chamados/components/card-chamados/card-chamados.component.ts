import { Component, EventEmitter, Input, Output, computed, inject } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DragDropModule } from 'primeng/dragdrop';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { ChipComponent } from '../../../shared/components/chip/chip.component';
import { IChamado, TStatusChamado } from '../../../shared/models/chamado.model';

@Component({
  selector: 'app-card-chamados',
  templateUrl: './card-chamados.component.html',
  styleUrls: ['./card-chamados.component.scss'],
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    DragDropModule,
    MenuModule,
    ButtonComponent,
    ChipComponent,
],
})
export class CardChamadosComponent {
  @Input() chamado!: IChamado;

  @Output() edit = new EventEmitter<IChamado>();
  @Output() remove = new EventEmitter<number>();
  @Output() moveToStatus = new EventEmitter<TStatusChamado>();

  private statusLabels: Record<TStatusChamado, string> = {
    'ATENDER': 'Não atendidos',
    'ANDAMENTO': 'Em andamento',
    'FINALIZADO': 'Finalizados'
  };

  public menuItems = computed<MenuItem[]>(() => {
    const currentStatus = this.chamado.status;
    const items: MenuItem[] = [];

    (['ATENDER', 'ANDAMENTO', 'FINALIZADO'] as TStatusChamado[]).forEach(status => {
      if (status !== currentStatus) {
        items.push({
          label: `Mover para ${this.statusLabels[status]}`,
          icon: 'pi pi-arrow-right',
          command: () => {
            this.moveToStatus.emit(status);
            // Força o fechamento do menu - Auxílio do ChatGPT
            setTimeout(() => {
              const overlay = document.querySelector('.p-menu-overlay.menu-align-right');
              if (overlay) {
                overlay.remove();
              }
            }, 100);
          }
        });
      }
    });

    return items;
  });

  public onDragStart(event: DragEvent): void {
    event.dataTransfer?.setData('chamadoId', this.chamado.id.toString());
  }
}