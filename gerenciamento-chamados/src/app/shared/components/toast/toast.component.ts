import { Component } from '@angular/core';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
  standalone: true,
  imports: [
    ToastModule
  ],
})
export class ToastComponent {}
