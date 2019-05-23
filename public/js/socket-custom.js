var socket = io();
socket.on('connect', function () {
    console.log('Conectado al servidor');
})

//Escucha de eventos entre servidor y cliente
socket.on('disconnect', function () {
    console.log('Se perdio la conexion don el servidor');
})

//Envio de informacion
socket.emit('enviarMensaje', {
    usuario: "Alexandro"
}, function (resp) {
    console.log('Se disparo el callback');
    console.log({
        respuesta: resp
    });
});

//Escucha de informacion
socket.on('enviarMensaje', function (mensaje) {
    console.log(mensaje);
})