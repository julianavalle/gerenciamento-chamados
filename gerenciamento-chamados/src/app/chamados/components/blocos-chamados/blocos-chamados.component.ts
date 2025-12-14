import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
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
export class BlocosChamadosComponent {
// Auxílio ChatGPT para deixar o Accordion um componente genérico
// Auxílio ChatGPT para correção de erro de o accordion não aparecer os cards 
  @Input() title!: string;
  @Input() badge?: number | string;
  @Input() severity:
  | 'success'
  | 'info'
  | 'warn'
  | 'danger'
  | 'contrast' = 'success';

  public set expanded(value: boolean) {
    this._expanded = value;
    this.active = value ? '0' : null;
  }
  public get expanded(): boolean {
    return this._expanded;
  }

  public _expanded = false;

  active: string | null = null;
}
