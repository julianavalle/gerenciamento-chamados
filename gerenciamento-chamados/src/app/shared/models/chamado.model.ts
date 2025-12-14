import { FormControl } from "@angular/forms";

export type TStatusChamado = 'ATENDER' | 'ANDAMENTO' | 'FINALIZADO';

export type TFormMode = 'CREATE' | 'EDIT';

export type TChamadoDraft = Omit<IChamado, 'id' | 'createdAt'>;

export interface IChamadoFormGroup {
  titulo: FormControl<string>;
  descricao: FormControl<string>;
  categoria: FormControl<string>;
  status: FormControl<TStatusChamado>;
}

export interface IChamado {
  id: number;
  titulo: string;
  descricao?: string;
  categoria?: string;
  status: TStatusChamado;
  createdAt?: Date;
}
