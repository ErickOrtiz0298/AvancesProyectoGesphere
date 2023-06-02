
//Este usuario realizará el envio de mensajes.

const io = require("socket.io-client");

const socket = io("http://localhost:8878"); // Reemplaza la URL con la correcta

socket.on("connect", () => {
    console.log("Conectado al servidor Socket.IO");
    const socketId = socket.id;
    console.log("ID del socket Erick:", socketId);
    // Emitir un evento personalizado al servidor
    const message = {
        senderName: "Erick",
        targetUserName: "Mario",
        message: "Hello, Mario!",
      };
    
      socket.emit("messageSendToUser", message);
      console.log("Enviado:", message);

      socket.emit("messageSendToUser", message, (response) => {
        console.log("Respuesta recibida:", response);
    }); 

});
