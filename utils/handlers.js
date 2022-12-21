const { ws } = require("../config/connectToFMP");

const handleOnClientConnected = socket => {

    console.log(socket.id)
  
    ws.on("message", (data) => socket.emit("SOC_DATA",data));
  
    socket.on("disconnect", () => {
      console.info(`Client gone [id=${socket.id}]`);
    });
  }

module.exports={
  handleOnClientConnected
}