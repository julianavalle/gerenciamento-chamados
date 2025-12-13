import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ChipModule } from 'primeng/chip';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrl: './chip.component.scss',
  imports: [
    ChipModule
  ],
})
export class ChipComponent {
  @Input() label?: string;
  @Input() icon?: string;
  @Input() image?: string;
  @Input() styleClass?: string;

  @Input() removable = false;
  @Input() disabled = false;

  @Output() remove = new EventEmitter<void>();
}
