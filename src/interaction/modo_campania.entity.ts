import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('ModoCampania')
export class ModoCampania {
  @PrimaryColumn()
  idModoCampania: number;

  @Column()
  Descripcion: string;
}
