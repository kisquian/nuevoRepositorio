var servidor = require('http');

function arrancaServidor(requiere, respuesta) {
	respuesta.writeHead(200, {"Content-Type":"text/html"});
	respuesta.write("<h1>The server is encaring the life</h1>");
	respuesta.end();
}

servidior.createServer(arrancaServidor).listen(8888);