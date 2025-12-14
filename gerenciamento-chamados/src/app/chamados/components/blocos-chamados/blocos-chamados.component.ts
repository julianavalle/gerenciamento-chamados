import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { BadgeModule } from 'primeng/badge';
import { DragDropModule } from 'primeng/dragdrop';

@Component({
  selector: 'app-blocos-chamados',
  templateUrl: './blocos-chamados.component.html',
  styleUrl: './blocos-chamados.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    AccordionModule,
    BadgeModule,
    DragDropModule,
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

  @Output() chamadoDropped = new EventEmitter<DragEvent>();

  @Input() set expanded(value: boolean) {
    this._expanded = value;
    this._active = value ? '0' : null;
  }
  public get expanded(): boolean {
    return this._expanded;
  }

  private _expanded = false;
  private _active: string | null = null;

  public get active(): string | null {
    return this._active;
  }
  public set active(value: string | null) {
    this._active = value;
  }

  public onDrop(event: DragEvent): void {
    this.chamadoDropped.emit(event);
  }
}
