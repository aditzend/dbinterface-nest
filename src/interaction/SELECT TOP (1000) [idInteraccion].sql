SELECT TOP (1000) [idInteraccion]
      ,[segmento]
      ,[Inicio]
      ,[Duracion]
      ,[DuracionTotal]
      ,[Extension]
      ,[FileName]
      ,[ModoDisparo]
      ,[offsetAudio]
      ,[Procesado]
      ,[chat]
      ,[videochatrecording]
      ,[auxiliarchatrecording]
  FROM [MitACD].[dbo].[Grabaciones]
  where [idInteraccion] = '210614222408193_ACD_00001'