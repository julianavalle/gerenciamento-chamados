import { Component, signal } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';

@Component({
    selector: 'card-chamados',
    templateUrl: './card-chamados.component.html',
    styleUrls: ['./card-chamados.component.scss'],
    standalone: true,
    imports: [
      CardModule,
      ButtonModule,
      ChipModule,
    ],
})
export class CardChamadosComponent {
}