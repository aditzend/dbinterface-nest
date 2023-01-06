import { Column, Entity, PrimaryColumn } from 'typeorm';

//  idCampania (PK, int, not null)
// idEmpresa (FK, int, null)
// Nombre (varchar (256), null)
// ModoCampania (tinyint, null)
// TipoContacto (FK, tinyint, null)
// FechaCreacion (datetime, null)
// Inicio (varchar(1024), null)
// Fin (varchar(1024), null)
// idCriterioRellamada (int, null)
// idGrupoFeriado (int, null)
// idBandaHoraria (int, null)
// idGrupoRecursos (int, null)
// idGrupoResultadosGestion (int, null)
// idGrupoWordSpottingOperador (int, null)
// idGrupoWordSpottingCliente (int, null)
// idListaNoLlame (int, null)
// idGrupoTiposBookmark (int, null)
// DNIS (varchar(24), null)
// Token (int, null)
// VinculoDefault (tinyint, null)
// idCuenta (int, null)
// idGrupoPlantillasMensajes (int, null)
// Activa (tinyint, null)
// Contextolnactiva(varchar(2048), null)

@Entity('Campanias')
export class Campania {
  @PrimaryColumn()
  idCampania: number;

  @Column()
  Nombre: string;

  @Column()
  ModoCampania: number;

  @Column()
  TipoContacto: number;

  @Column()
  FechaCreacion: Date;

  @Column()
  Inicio: string;

  @Column()
  Fin: string;

  @Column()
  idCriterioRellamada: number;

  @Column()
  idGrupoFeriado: number;

  @Column()
  idBandaHoraria: number;

  @Column()
  idGrupoRecursos: number;

  @Column()
  idGrupoResultadosGestion: number;

  @Column()
  idGrupoWordSpottingOperador: number;

  @Column()
  idGrupoWordSpottingCliente: number;

  @Column()
  idListaNoLlame: number;

  @Column()
  idGrupoTiposBookmark: number;

  @Column()
  DNIS: string;

  @Column()
  Token: number;

  @Column()
  VinculoDefault: number;

  @Column()
  idCuenta: number;

  @Column()
  idGrupoPlantillasMensajes: number;

  @Column()
  Activa: number;

  @Column()
  ContextoInactiva: string;
}
