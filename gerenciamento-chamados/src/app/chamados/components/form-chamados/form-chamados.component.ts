import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { ReactiveFormsModule, Validators, FormGroup, FormControl } from '@angular/forms';
import { IChamado, IChamadoFormGroup, TChamadoDraft, TFormMode, TStatusChamado } from '../../../shared/models/chamado.model';
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { CardModule } from "primeng/card";
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-form-chamados',
  templateUrl: './form-chamados.component.html',
  styleUrl: './form-chamados.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardModule,
    ButtonComponent,
    InputTextModule,
    TextareaModule,
    FloatLabelModule,
],
})
export class FormChamadosComponent implements OnChanges {

  @Input() mode: TFormMode = 'CREATE';
  @Input() initial?: IChamado | null;

  @Output() submitForm = new EventEmitter<TChamadoDraft>();
  @Output() cancel = new EventEmitter<void>();

  statusOptions = [
    { label: 'Não atendidos', value: 'ATENDER' as TStatusChamado },
    { label: 'Em andamento', value: 'ANDAMENTO' as TStatusChamado },
    { label: 'Finalizados', value: 'FINALIZADO' as TStatusChamado },
  ];

  public chamadoForm: FormGroup<IChamadoFormGroup> = new FormGroup<IChamadoFormGroup>({
    titulo: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(3)] }),
    descricao: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(10)] }),
    categoria: new FormControl('', { nonNullable: true }),
    status: new FormControl('ATENDER', { nonNullable: true, validators: [Validators.required] }),
  });

  public ngOnChanges(): void {
    if (this.mode === 'EDIT' && this.initial) {
      this.chamadoForm.reset({
        titulo: this.initial.titulo ?? '',
        descricao: this.initial.descricao ?? '',
        categoria: this.initial.categoria ?? '',
        status: this.initial.status,
      });
      return;
    }

    if (this.mode === 'CREATE') {
      this.chamadoForm.reset({
        titulo: '',
        descricao: '',
        categoria: '',
        status: 'ATENDER',
      });
    }
  }

  public get title(): string {
    return this.mode === 'EDIT' ? 'Editar chamado' : 'Novo chamado';
  }

  public get submitLabel(): string {
    return this.mode === 'EDIT' ? 'Salvar alterações' : 'Criar chamado';
  }

  public onSubmit(): void {

    if (this.chamadoForm.invalid) {
      this.chamadoForm.markAllAsTouched();
      return;
    }

    const value = this.chamadoForm.getRawValue();

    this.submitForm.emit(value);
  }

  public isFormDirty(): boolean {
    return this.chamadoForm.dirty;
  }
}
