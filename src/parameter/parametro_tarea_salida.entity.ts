import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('ParametrosTareaSalida')
export class ParametroTareaSalida {
  @PrimaryColumn()
  idTarea: number;

  @PrimaryColumn()
  NombreParametro: string;

  @Column()
  Valor: string;
}
