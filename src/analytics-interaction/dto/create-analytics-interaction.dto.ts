export class CreateAnalyticsInteractionDto {
  idInteraccion: string;
  estado: string;
  sentimientoPrincipal: string;
  emocionPrincipal: string;
  intencionPrincipal: string;
  subIntencionPrincipal: string;
  hayHateSpeech: boolean;
  haySentimientoNegativo: boolean;
  hayAlegria: boolean;
  hayDisgusto: boolean;
  hayMiedo: boolean;
  hayIra: boolean;
  haySorpresa: boolean;
  hayTristeza: boolean;
  entidades: string;
}
