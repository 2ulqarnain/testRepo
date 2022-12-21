require("dotenv").config()
const WebSocket = require("ws");
const { login, subscribe } = require("./fmpObjs");
const ws=new WebSocket(process.env.FMP_URL,{
  rejectUnauthorized:false
})

ws.on('error',(data)=>console.log("error from server:",data))

// send authentication data on CONN OPEN
ws.on("open", () => {
    ws.send(JSON.stringify(login));
    // ws.send(JSON.stringify(subscribe));
    setTimeout(()=>ws.send(JSON.stringify(subscribe)),100)
});

module.exports={ws}