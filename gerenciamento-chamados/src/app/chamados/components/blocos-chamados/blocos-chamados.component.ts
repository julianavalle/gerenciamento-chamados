import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { BadgeModule } from 'primeng/badge';

@Component({
  selector: 'app-blocos-chamados',
  templateUrl: './blocos-chamados.component.html',
  styleUrl: './blocos-chamados.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    AccordionModule,
    BadgeModule,
  ],
})
export class BlocosChamadosComponent implements OnChanges{
// Auxílio ChatGPT para deixar o Accordion um componente genérico
  @Input() title!: string;
  @Input() expanded = false;
  @Input() badge?: number | string;
  @Input() severity:
  | 'success'
  | 'info'
  | 'warn'
  | 'danger'
  | 'contrast' = 'success';

  
  active: string | null = null;

  ngOnChanges(_: SimpleChanges) {
    this.active = this.expanded ? '0' : null;
  }
}
