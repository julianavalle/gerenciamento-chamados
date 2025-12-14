import { Injectable } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ConfirmDialogService {
  constructor(private confirmationService: ConfirmationService) {}

  public confirm(options: {
    header: string;
    message: string;
    acceptLabel?: string;
    rejectLabel?: string;
    acceptIcon?: string;
    rejectIcon?: string;
    icon?: string;
    onAccept: () => void;
    onReject?: () => void;
  }): void {
    this.confirmationService.confirm({
      header: options.header,
      message: options.message,
      icon: options.icon || 'pi pi-exclamation-triangle',
      acceptLabel: options.acceptLabel || 'Sim',
      rejectLabel: options.rejectLabel || 'Não',
      acceptIcon: options.acceptIcon,
      rejectIcon: options.rejectIcon,
      acceptButtonStyleClass: 'p-button-danger',
      rejectButtonStyleClass: 'p-button-secondary p-button-outlined',
      accept: options.onAccept,
      reject: options.onReject,
    });
  }
}
