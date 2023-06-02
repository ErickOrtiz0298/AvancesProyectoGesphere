//Este usuario realizará la recepcion de mensajes. 

const io = require("socket.io-client");

const socket = io("http://localhost:8878");

socket.on("connect", () => {
    console.log("Conectado al servidor Socket.IO");
    const socketId = socket.id;
    console.log("ID del socket Mario:", socketId);

     /* const message = {
        senderName: "Mario",
        targetUserName: "Erick",
        message: "Hello, Erick!",
    }; */ 

    /* socket.emit("messageSendToUser", message, (response) => {
        console.log("Respuesta recibida:", response);
    }); */ 

    socket.on("message", (message) => {
        console.log("Mensaje recibido:", message);
      }); 

}); 



