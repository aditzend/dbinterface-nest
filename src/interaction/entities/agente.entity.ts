import { Column, Entity, PrimaryColumn } from 'typeorm';

// idAgente (PK, int, not null)
// Nombre (varchar(256), null)
// idGrupo (FK, int, null)
// idPerfil (FK, int, null)
// Usuario (varchar (24), null)
// Password (varchar(256), null)
// Superusuario (tinyint, null)
// Loginld (varchar(24), null)
// PasswordLoginld (varchar(256), null)
// idPerfilAgente (int, null)
// Costo (int, null)
// Legajo (varchar(24), null)
// email (varchar(256), null)
// Direccion (varchar(256), null)
// TelefonoCasa (varchar (24), null)
// TelefonoCelular (varchar(24), null)
// Activo (tinyint, null)
// TieneFoto (tinyint, null)
// UltimoCambioFoto (datetime, null)
// FechaAlta (datetime, null)
// FechaBaja (datetime, null)
// ModoAutenticacion (tinyint, null)
// Token (int, null)
// rol (varchar(100), null)
// Photo (varchar(200), null)
// ContentType (varchar(50), null)
// usuarioMIM (varchar(24), null)
// passwordMIM (varchar(256), null)
// esUsuario(tinyint, null)

@Entity('Agentes')
export class Agente {
  @PrimaryColumn()
  idAgente: number;

  @Column()
  Nombre: string;

  @Column()
  idGrupo: number;

  @Column()
  idPerfil: number;

  @Column()
  Usuario: string;

  @Column()
  Password: string;

  @Column()
  Superusuario: number;

  @Column()
  LoginId: string;

  @Column()
  PasswordLoginId: string;

  @Column()
  idPerfilAgente: number;

  @Column()
  Costo: number;

  @Column()
  Legajo: string;

  @Column()
  email: string;

  @Column()
  Direccion: string;

  @Column()
  TelefonoCasa: string;

  @Column()
  TelefonoCelular: string;

  @Column()
  Activo: number;

  @Column()
  TieneFoto: number;

  @Column()
  UltimoCambioFoto: Date;

  @Column()
  FechaAlta: Date;

  @Column()
  FechaBaja: Date;

  @Column()
  ModoAutenticacion: number;

  @Column()
  Token: number;

  @Column()
  rol: string;

  @Column()
  Photo: string;

  @Column()
  ContentType: string;

  // @Column()
  // usuarioMIM: string;

  // @Column()
  // passwordMIM: string;

  // @Column()
  // esUsuario: number;

  // @Column()
  // esAgente: number;

  // @Column()
  // Migrado: number;
}
