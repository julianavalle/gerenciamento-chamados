import { Injectable, signal, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DeviceDetectionService {
  private platformId = inject(PLATFORM_ID);
  public isTouchDevice = signal<boolean>(this.detectTouchDevice());

  private detectTouchDevice(): boolean {
    // Verifica se está rodando no browser antes de acessar window
    if (!isPlatformBrowser(this.platformId)) {
      return false;
    }

    return (
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches
    );
  }
}
