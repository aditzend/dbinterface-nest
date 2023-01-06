import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('ParametrosTareaEntrada')
export class ParametroTareaEntrada {
  @PrimaryColumn()
  idTarea: number;

  @Column()
  NombreParametro: string;

  @Column()
  Valor: string;
}
