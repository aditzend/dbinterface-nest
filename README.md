Parámetros



Listar todos los parámetros de salida de un id de tarea específico.



Request

GET /v3/parameters/outgoing/{task_id}

Response

[{"ParametroTareaSalida_idTarea":812,"ParametroTareaSalida_NombreParametro":"alex","ParametroTareaSalida_Valor":"43"},{"ParametroTareaSalida_idTarea":812,"ParametroTareaSalida_NombreParametro":"Fecha_credito","ParametroTareaSalida_Valor":"21/04/2022"},{"ParametroTareaSalida_idTarea":812,"ParametroTareaSalida_NombreParametro":"Fecha_proceso","ParametroTareaSalida_Valor":"202207"},{"ParametroTareaSalida_idTarea":812,"ParametroTareaSalida_NombreParametro":"Fecha_vigencia","ParametroTareaSalida_Valor":"21/04/2022"},{"ParametroTareaSalida_idTarea":812,"ParametroTareaSalida_NombreParametro":"Flujo","ParametroTareaSalida_Valor":"NORMAL"},{"ParametroTareaSalida_idTarea":812,"ParametroTareaSalida_NombreParametro":"resultado","ParametroTareaSalida_Valor":"INDEFINIDO"},{"ParametroTareaSalida_idTarea":812,"ParametroTareaSalida_NombreParametro":"resultado_gestion","ParametroTareaSalida_Valor":"0"},{"ParametroTareaSalida_idTarea":8123,"ParametroTareaSalida_NombreParametro":"alexito2","ParametroTareaSalida_Valor":"42sdf2"}]





Listar todos los parámetros de entrada de un id de tarea específico

Request

GET /v3/parameters/incoming/{task_id}

Response

[{"ParametroTareaEntrada_idTarea":812,"ParametroTareaEntrada_NombreParametro":"Celular","ParametroTareaEntrada_Valor":"925989416"},{"ParametroTareaEntrada_idTarea":812,"ParametroTareaEntrada_NombreParametro":"Contuvo","ParametroTareaEntrada_Valor":"4781,91"},{"ParametroTareaEntrada_idTarea":812,"ParametroTareaEntrada_NombreParametro":"Cuotas_morosas","ParametroTareaEntrada_Valor":"3.[61-90]"},{"ParametroTareaEntrada_idTarea":812,"ParametroTareaEntrada_NombreParametro":"Descuento","ParametroTareaEntrada_Valor":"1000"},{"ParametroTareaEntrada_idTarea":812,"ParametroTareaEntrada_NombreParametro":"Deuda_actual","ParametroTareaEntrada_Valor":"845"},{"ParametroTareaEntrada_idTarea":812,"ParametroTareaEntrada_NombreParametro":"DV","ParametroTareaEntrada_Valor":"1024,775"},{"ParametroTareaEntrada_idTarea":812,"ParametroTareaEntrada_NombreParametro":"Email","ParametroTareaEntrada_Valor":"JZUMAETA@GMAIL.COM"},{"ParametroTareaEntrada_idTarea":812,"ParametroTareaEntrada_NombreParametro":"Entidad","ParametroTareaEntrada_Valor":"INTERBANK"},{"ParametroTareaEntrada_idTarea":812,"ParametroTareaEntrada_NombreParametro":"Fecha_credito","ParametroTareaEntrada_Valor":"27/08"},{"ParametroTareaEntrada_idTarea":812,"ParametroTareaEntrada_NombreParametro":"Fecha_proceso","ParametroTareaEntrada_Valor":"202207"},{"ParametroTareaEntrada_idTarea":812,"ParametroTareaEntrada_NombreParametro":"Fecha_promesa","ParametroTareaEntrada_Valor":"27/08"},{"ParametroTareaEntrada_idTarea":812,"ParametroTareaEntrada_NombreParametro":"Fecha_vigencia","ParametroTareaEntrada_Valor":"31/08"},{"ParametroTareaEntrada_idTarea":812,"ParametroTareaEntrada_NombreParametro":"Flujo","ParametroTareaEntrada_Valor":"PROMESA"},{"ParametroTareaEntrada_idTarea":812,"ParametroTareaEntrada_NombreParametro":"Genero","ParametroTareaEntrada_Valor":"M"},{"ParametroTareaEntrada_idTarea":812,"ParametroTareaEntrada_NombreParametro":"Mes","ParametroTareaEntrada_Valor":"JULIO"},{"ParametroTareaEntrada_idTarea":812,"ParametroTareaEntrada_NombreParametro":"Moneda","ParametroTareaEntrada_Valor":"PEN"},{"ParametroTareaEntrada_idTarea":812,"ParametroTareaEntrada_NombreParametro":"Monto_cuota","ParametroTareaEntrada_Valor":"236,1"},{"ParametroTareaEntrada_idTarea":812,"ParametroTareaEntrada_NombreParametro":"Nombre","ParametroTareaEntrada_Valor":"JANIA ALBORNOZ"},{"ParametroTareaEntrada_idTarea":812,"ParametroTareaEntrada_NombreParametro":"Nombre_Asistente","ParametroTareaEntrada_Valor":"Kiev"},{"ParametroTareaEntrada_idTarea":812,"ParametroTareaEntrada_NombreParametro":"Normalizo","ParametroTareaEntrada_Valor":"XXX"},{"ParametroTareaEntrada_idTarea":812,"ParametroTareaEntrada_NombreParametro":"Numero_al_que_se_deben_contactar","ParametroTareaEntrada_Valor":"321 375 7366"},{"ParametroTareaEntrada_idTarea":812,"ParametroTareaEntrada_NombreParametro":"Numero_operacion","ParametroTareaEntrada_Valor":"7056717"},{"ParametroTareaEntrada_idTarea":812,"ParametroTareaEntrada_NombreParametro":"Producto","ParametroTareaEntrada_Valor":"01 Amex"},{"ParametroTareaEntrada_idTarea":812,"ParametroTareaEntrada_NombreParametro":"RUT","ParametroTareaEntrada_Valor":"18157658"},{"ParametroTareaEntrada_idTarea":812,"ParametroTareaEntrada_NombreParametro":"Salida_comercial","ParametroTareaEntrada_Valor":"XXX"},{"ParametroTareaEntrada_idTarea":812,"ParametroTareaEntrada_NombreParametro":"Tipo_cliente","ParametroTareaEntrada_Valor":"TARJETAS"}]



Crear un parámetro de tarea de salida



Este endpoint sirve para cargar slots como parámetros de tarea de salida.



Request

## crear pts
curl -X "POST" "http://127.0.0.1:4000/v3/parameters/outgoing" \
     -H 'Content-Type: application/json; charset=utf-8' \
     -d $'{
  "task_id": 812,
  "key": "alexitos4",
  "value": "42sdfe"
}'



Response

HTTP/1.1 201 Created
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 2
ETag: W/"2-eoX0dku9ba8cNUXvu/DyeabcC+s"
Date: Thu, 05 Jan 2023 22:56:33 GMT
Connection: close

ok





Interacciones



Interacción como está en la base

Devuelve el registro de la tabla interacciones.



Request

GET /v3/interactions/{interaction_id}



Response

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 390
ETag: W/"186-QqLlUYZJdDF7YIVM+9gmZ1DcX+s"
Date: Fri, 06 Jan 2023 12:47:32 GMT
Connection: close

{"idInteraccion":"210614222408193_ACD_00001","Inicio":"2021-06-15T01:24:08.193Z","idNumero":0,"idCRM":null,"Cliente":null,"DNIS":null,"ANI":null,"idResultadoGestion":null,"CausaTerminacion":27,"CausaQ850":136,"OrigenCorte":0,"idCampania":null,"idAgente":3,"segmentos":1,"Contexto":null,"idMensaje":0,"idCaso":0,"idCliente":null,"CerradaPorTiempoMaxACW":null,"Duracion":18631194,"idTarea":0}





Interacción completa, con modelo listo para analytics



Request

GET /v3/interactions/full/{interaction_id}



Response

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 670
ETag: W/"29e-5t5INuORMGjpgpwfFx8cpzq/8bk"
Date: Fri, 06 Jan 2023 12:50:29 GMT
Connection: close

{"id":"210614222408193_ACD_00001","started_at":"2021-06-15T01:24:08.193Z","crm_id":null,"client":{"id":null,"name":null,"phone_number_id":0},"dnis":null,"ani":null,"result":{"id":null,"code":null,"name":""},"termination_cause":{"id":27,"description":"Se contacta con el operador","default_score":1000,"default_time":0},"q850_cause_id":136,"cut_origin":{"id":0,"description":"Agente"},"campaign":{"id":1,"name":"VoiceBot","mode":"Piloto"},"agent":{"id":3,"name":"inno1","group_id":1,"group_name":"InnoGroup","supervisor_id":8,"supervisor_name":"ippad1"},"segments":1,"context":null,"message_id":0,"case_id":0,"closed_by_max_acw_time":null,"duration":18631194,"task_id":0}





Campañas



Devuelve el registro de la tabla

Request

GET /v3/campaigns/{campaign_id}



Response

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 507
ETag: W/"1fb-BiDz7G9yy5n6qH1Zz8WWC7Dtzl8"
Date: Fri, 06 Jan 2023 12:52:09 GMT
Connection: close

{"idCampania":2,"Nombre":"ChatBot","ModoCampania":4,"TipoContacto":5,"FechaCreacion":"2021-06-15T01:42:45.270Z","Inicio":null,"Fin":null,"idCriterioRellamada":null,"idGrupoFeriado":1,"idBandaHoraria":2,"idGrupoRecursos":null,"idGrupoResultadosGestion":1,"idGrupoWordSpottingOperador":null,"idGrupoWordSpottingCliente":null,"idListaNoLlame":null,"idGrupoTiposBookmark":null,"DNIS":"ChatBot","Token":80,"VinculoDefault":null,"idCuenta":null,"idGrupoPlantillasMensajes":null,"Activa":1,"ContextoInactiva":null}





Agentes



Devuelve el registro de la tabla.



Request

GET /v3/agents/{agent_id}





Response

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 617
ETag: W/"269-++7afKWb+kclXp8muwUbjZbgClM"
Date: Fri, 06 Jan 2023 12:53:33 GMT
Connection: close

{"idAgente":8,"Nombre":"ippad1","idGrupo":1,"idPerfil":1,"Usuario":"pad1","Superusuario":1,"LoginId":"pad1",,"idPerfilAgente":null,"Costo":0,"Legajo":null,"email":null,"Direccion":null,"TelefonoCasa":null,"TelefonoCelular":null,"Activo":1,"TieneFoto":0,"UltimoCambioFoto":null,"FechaAlta":"2021-07-16T01:50:03.460Z","FechaBaja":null,"ModoAutenticacion":0,"Token":1676,"rol":null,"Photo":null,"ContentType":null,"usuarioMIM":"pad1","esUsuario":1,"esAgente":1,"Migrado":0}