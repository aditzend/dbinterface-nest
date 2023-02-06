import { Column, Entity, PrimaryColumn } from 'typeorm';

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
