module.exports = function ( io ) {

	io.sockets.on('connection', function ( socket ) {
		
		// Primer prueba
		var i = 0;
		setInterval(function(){
			socket.emit('send:saludos', {hola: 'Hola Andres ' + i})
			i ++ ;
		}, 50)

		
	});


}