export class CreateAnalyticsEventDto {
  idEvento: string;
  idInteraccion: string;
  idSegmento: string;
  tipo: string;
  comienzo: number;
  fin: number;
  texto: string;
  canal: number;
  intencion: string;
  entidades: string;
  sentimientos: string;
  emociones: string;
  ner: string;
  pos: string;
  hateSpeech: string;
}
