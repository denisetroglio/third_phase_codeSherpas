// importar dependencias:
const express = require("express");
const cors = require("cors");

// crear el servidor:
const server = express();

// configurar el servidor (hacer peticiones):
server.use(cors());
server.use(express.json());

// iniciar el servidor
const serverPort = 3000;
server.listen(serverPort, () =>
  console.log(`Server listening at http://localhost:${serverPort}`)
);

console.log("Hi everyone!");

//Exportar main.js para hacer los testes en JEST:
module.exports = server;
