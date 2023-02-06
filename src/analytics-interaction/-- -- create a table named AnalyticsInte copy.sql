-- -- create a table named AnalyticsInteracciones
CREATE TABLE AnalyticsInteracciones (
  idInteraccion VARCHAR(75) PRIMARY KEY,
  estado varchar(max),
  sentimientoPrincipal varchar(max),
  emocionPrincipal varchar(max),
  intencionPrincipal varchar(max),
  subIntencionPrincipal varchar(max),
  hayHateSpeech bit,
  haySentimientoNegativo bit,
  hayAlegria bit,
  haydisgusto bit,
  hayMiedo bit,
  hayIra bit,
  hayTristeza bit,
  haySorpresa bit,
  entidades text,

);

-- turn off identity INSERT
-- SET IDENTITY_INSERT AnalyticsInteracciones OFF;

-- remove table AnalyticsInteracciones
-- DROP TABLE AnalyticsInteracciones;