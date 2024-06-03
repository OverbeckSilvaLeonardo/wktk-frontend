import type { IExercicio } from '@/interfaces/exercicio.interface';

export interface ITreino {
  id: string | undefined;
  descricao: string;
  exercicios: IExercicio[]
}
