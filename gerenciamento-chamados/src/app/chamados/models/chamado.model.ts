export type StatusChamado = 'ATENDER' | 'ANDAMENTO' | 'FINALIZADO';

export interface Chamado {
  id: number;
  titulo: string;
  descricao?: string;
  categoria?: string;
  status: StatusChamado;
  createdAt?: Date;
}
