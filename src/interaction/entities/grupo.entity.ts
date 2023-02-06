import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('Grupos')
export class Grupo {
  @PrimaryColumn()
  idGrupo: number;

  @Column()
  Nombre: string;

  @Column()
  idSupervisor: number;
}
