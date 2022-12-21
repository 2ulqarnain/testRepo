const handleOnClientConnected = socket => {

    console.log("socket.id")

    socket.emit("customEvent","customData1")
    socket.emit("customEvent","customData2")
    socket.emit("customEvent","customData3")
    socket.emit("customEvent","customData4")
    socket.emit("customEvent","customData5")
  
    socket.on("disconnect", () => {
      console.info(`Client gone [id=${socket.id}]`);
    });
  }

module.exports={
  handleOnClientConnected
}