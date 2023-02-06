import { Segment } from './segment.interface';

export interface Interaction {
  interaction_id: string;
  started_at: Date;
  segments: Segment[];
  crm_id: string;
  client: {
    id: string;
    name: string;
    phone_number_id: number;
  };
  dnis: string;
  ani: string;
  result: {
    id: number; // idResultadoGestion
    code: string; // id
    name: string; // NombreCompleto
  };
  termination_cause: {
    id: number;
    description: string;
    default_score: number;
    default_time: number;
  };
  q850_cause_id: number;
  cut_origin: {
    id: number;
    description: string;
  };
  campaign: {
    id: number;
    name: string;
    mode: string;
  };
  agent: {
    id: number;
    name: string;
    group_id: number;
    group_name: string;
    supervisor_id: number;
    supervisor_name: string;
  };
  context: string;
  message_id: number;
  case_id: number;
  closed_by_max_acw_time: number;
  duration: number;
  task_id: number;
}
