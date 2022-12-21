const { Server } = require("socket.io")
const server = new Server(8000);

const { ws } = require("./config/connectToFMP")

require("dotenv").config()


server.on("connection", (socket) => {

  ws.on("message", (data) => socket.emit("SOC_DATA",data));

  socket.on("disconnect", () => {
    console.info(`Client gone [id=${socket.id}]`);
  });
});