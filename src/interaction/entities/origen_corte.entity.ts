import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('OrigenesCorte')
export class OrigenCorte {
  @PrimaryColumn()
  idOrigenCorte: number;

  @Column()
  Descripcion: string;
}
