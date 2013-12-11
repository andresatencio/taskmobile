
var express = require('express')
  , colors = require('colors');

var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

// Configuracion de app Express
require('./config')(app, express)

// Inicia conexion
// con la base de datos
require('./db/conexion')

// Ruteo
require('./routes/index')(app)

// Rutas de socket's
require('./routes/socket')(io)

// Configuracion de entorno
app.configure('development', function(){
  app.use(express.errorHandler());
});

// Se crea el servidor
server.listen(app.get('port'), function(){
  console.log("Express esta a full! Puerto: ".green + app.get('port').toString().yellow);
});


