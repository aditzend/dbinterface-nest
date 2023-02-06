import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('AnalyticsEventos')
export class AnalyticsEvento {
  @PrimaryColumn()
  idEvento: string;

  @Column()
  idSegmento: string;

  @Column()
  idInteraccion: string;

  @Column()
  tipo: string;

  @Column()
  comienzo: number;

  @Column()
  fin: number;

  @Column()
  texto: string;

  @Column()
  canal: number;

  @Column()
  intencion: string;

  @Column()
  entidades: string;

  @Column()
  sentimientos: string;

  @Column()
  emociones: string;

  @Column()
  ner: string;

  @Column()
  pos: string;

  @Column()
  hateSpeech: string;
}
