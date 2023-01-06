import { Entity, Column, PrimaryColumn } from 'typeorm';

// idResultadoGestion (PK, int, not null)
// Nombre (varchar(256), not null)
// id (varchar (256), null)
// TipoDefault (tinyint, null)
// TiempoRellamadaDefault (int, null)
// idParent (int, null)
// NombreCompleto (varchar(max), null)
// Nivel (int, null)
// EsResultado(tinyint, null)

@Entity('ResultadosGestion')
export class ResultadoGestion {
  @PrimaryColumn()
  idResultadoGestion: number;

  @Column()
  Nombre: string;

  @Column()
  id: string;

  @Column()
  TipoDefault: number;

  @Column()
  TiempoRellamadaDefault: number;

  @Column()
  idParent: number;

  @Column()
  NombreCompleto: string;

  @Column()
  Nivel: number;

  @Column()
  EsResultado: number;
}
