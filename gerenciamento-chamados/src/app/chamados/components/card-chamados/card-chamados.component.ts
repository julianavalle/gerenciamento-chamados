import { Component, Input, signal } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { ChipComponent } from '../../../shared/components/chip/chip.component';
import { Chamado } from '../../models/chamado.model';

@Component({
  selector: 'app-card-chamados',
  templateUrl: './card-chamados.component.html',
  styleUrls: ['./card-chamados.component.scss'],
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    ButtonComponent,
    ChipComponent,
],
})
export class CardChamadosComponent {
  @Input() chamado!: Chamado;
}