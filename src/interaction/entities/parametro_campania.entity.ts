import { Column, Entity, PrimaryColumn } from 'typeorm';

// CodigoTerminacion (PK, int, not null)
// Descripcion (varchar(256), null)
// PuntajeDefault (int, null)
// Tiempo Default (int, null)
@Entity('ParametrosCampania')
export class ParametroCampania {
  @PrimaryColumn()
  idCampania: number;

  @Column()
  NombreParametro: string;

  @Column()
  Descripcion: string;

  @Column()
  Valor: string;
}
