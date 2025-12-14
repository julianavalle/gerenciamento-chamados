import { Injectable, signal } from '@angular/core';
import { IChamado, TStatusChamado } from '../shared/models/chamado.model';

type ChamadoCreate = Omit<IChamado, 'id' | 'createdAt'>;

@Injectable({ providedIn: 'root' })
export class ChamadosMockService {
  private _chamados = signal<IChamado[]>([
    {
      id: 1,
      titulo: 'Chamado 1',
      descricao: 'Problema do chamado 1',
      categoria: 'Categoria 1',
      status: 'ATENDER',
      createdAt: new Date(),
    },
    {
      id: 2,
      titulo: 'Chamado 2',
      descricao: 'Problema do chamado 2',
      categoria: 'Categoria 2',
      status: 'ATENDER',
      createdAt: new Date(),
    },
    {
      id: 3,
      titulo: 'Chamado 3',
      descricao: 'Problema do chamado 3',
      categoria: 'Categoria 3',
      status: 'ANDAMENTO',
      createdAt: new Date(),
    },

    {
      id: 4,
      titulo: 'Chamado 4',
      descricao: 'Problema do chamado 4',
      categoria: 'Categoria 4',
      status: 'FINALIZADO',
      createdAt: new Date(),
    },
  ]);

  chamados = this._chamados.asReadonly();

  // Criado com auxílio do ChatGPT

  public byStatus(status: TStatusChamado): IChamado[] {
    return this._chamados().filter(c => c.status === status);
  }

  public getById(id: number) {
    return this._chamados().find(c => c.id === id) ?? null;
  }

  public create(data: ChamadoCreate) {
    const nextId = Math.max(0, ...this._chamados().map(c => c.id)) + 1;
    this._chamados.update(arr => [
      ...arr,
      { ...data, id: nextId, createdAt: new Date() },
    ]);
  }

  public update(id: number, patch: Partial<IChamado>) {
    this._chamados.update(arr =>
      arr.map(c => (c.id === id ? { ...c, ...patch } : c))
    );
  }

  public remove(id: number) {
    this._chamados.update(arr => arr.filter(c => c.id !== id));
  }
}
