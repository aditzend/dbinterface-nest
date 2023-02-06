import { Entity, Column, PrimaryColumn } from 'typeorm';
@Entity('Interacciones')
export class Interaccion {
  @PrimaryColumn()
  idInteraccion: string;

  @Column()
  Inicio: Date;

  @Column()
  idNumero: number;

  @Column()
  idCRM: string;

  @Column()
  Cliente: string;

  @Column()
  DNIS: string;

  @Column()
  ANI: string;

  @Column()
  idResultadoGestion: number;

  @Column()
  CausaTerminacion: number;

  @Column()
  CausaQ850: number;

  @Column()
  OrigenCorte: number;

  @Column()
  idCampania: number;

  @Column()
  idAgente: number;

  @Column()
  segmentos: number;

  @Column()
  Contexto: string;

  @Column()
  idMensaje: number;

  @Column()
  idCaso: number;

  @Column()
  idCliente: string;

  // @Column()
  // CerradaPorTiempoMaxACW: number;

  @Column()
  Duracion: number;

  @Column()
  idTarea: number;
}
