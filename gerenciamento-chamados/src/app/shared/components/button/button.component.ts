import { Component, Input } from '@angular/core';
import { ButtonModule } from "primeng/button";

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  imports: [
    ButtonModule
  ],
})
export class ButtonComponent {
  @Input() label?: string;
  @Input() icon?: string;
  @Input() styleClass?: string;
  @Input() text = false;
  @Input() rounded = false;
  @Input() outlined = false;
  @Input() disabled = false;

  // Auxílio do ChatGPT
  @Input() severity:
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warn'
  | 'help'
  | 'danger'
  | 'contrast' = 'primary';
}
