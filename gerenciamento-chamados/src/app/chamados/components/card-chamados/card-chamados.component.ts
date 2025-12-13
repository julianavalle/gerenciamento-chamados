import { Component, signal } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ChipComponent } from '../../../shared/components/chip/chip.component';
import { ButtonComponent } from "../../../shared/components/button/button.component";

@Component({
  selector: 'app-card-chamados',
  templateUrl: './card-chamados.component.html',
  styleUrls: ['./card-chamados.component.scss'],
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    ChipComponent,
    ButtonComponent,
],
})
export class CardChamadosComponent {
}