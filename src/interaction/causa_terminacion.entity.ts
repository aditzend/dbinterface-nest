import { Column, Entity, PrimaryColumn } from 'typeorm';

// CodigoTerminacion (PK, int, not null)
// Descripcion (varchar(256), null)
// PuntajeDefault (int, null)
// Tiempo Default (int, null)
@Entity('CausasTerminacion')
export class CausaTerminacion {
  @PrimaryColumn()
  CodigoTerminacion: number;

  @Column()
  Descripcion: string;

  @Column()
  PuntajeDefault: number;

  @Column()
  TiempoDefault: number;
}
