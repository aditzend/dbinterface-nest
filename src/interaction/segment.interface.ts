export interface Segment {
  segment_id: string;
  started_at: Date;
  duration: number;
  total_duration?: number;
  extension?: string;
  file?: string;
  shoot_mode?: number;
  audio_offset?: number;
  processed?: number;
  chat?: string;
  video_chat_recording?: string;
  auxiliar_chat_recording?: string;
}
