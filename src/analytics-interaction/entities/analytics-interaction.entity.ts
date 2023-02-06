import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('AnalyticsInteracciones')
export class AnalyticsInteraccion {
  @PrimaryColumn()
  idInteraccion: string;

  @Column()
  estado: string;

  @Column()
  sentimientoPrincipal: string;

  @Column()
  emocionPrincipal: string;

  @Column()
  intencionPrincipal: string;

  @Column()
  subIntencionPrincipal: string;

  @Column()
  hayHateSpeech: boolean;

  @Column()
  haySentimientoNegativo: boolean;
  @Column()
  hayAlegria: boolean;
  @Column()
  hayDisgusto: boolean;
  @Column()
  hayMiedo: boolean;
  @Column()
  hayIra: boolean;
  @Column()
  haySorpresa: boolean;
  @Column()
  hayTristeza: boolean;
  @Column()
  entidades: string;
}
