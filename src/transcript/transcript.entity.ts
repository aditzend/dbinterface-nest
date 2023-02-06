import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Transcripciones')
export class Transcript {
  @PrimaryGeneratedColumn()
  idTranscripcion: number;

  @Column()
  idInteraccion: string;

  @Column()
  proveedorASR: string;

  @Column()
  comienzo: Date;

  @Column()
  fin: Date;

  @Column()
  cuenta: string;

  @Column()
  texto: string;

  @Column()
  estado: string;
}
