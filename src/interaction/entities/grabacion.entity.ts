import { Column, Entity, PrimaryColumn } from 'typeorm';

// CodigoTerminacion (PK, int, not null)
// Descripcion (varchar(256), null)
// PuntajeDefault (int, null)
// Tiempo Default (int, null)
@Entity('Grabaciones')
export class Grabacion {
  @PrimaryColumn()
  idInteraccion: string;

  @PrimaryColumn()
  segmento: number;

  @Column()
  Inicio: Date;

  @Column()
  Duracion: number;

  @Column()
  DuracionTotal: number;

  @Column()
  Extension: string;

  @Column()
  FileName: string;

  @Column()
  ModoDisparo: number;

  @Column()
  offsetAudio: number;

  @Column()
  Procesado: number;

  @Column()
  chat: string;

  @Column()
  videochatrecording: string;

  @Column()
  auxiliarchatrecording: string;
}
