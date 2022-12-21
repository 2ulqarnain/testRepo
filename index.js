require("dotenv").config()
// const PORT=3000

// const app = require('express')();
// const http = require('http').Server(app);
const io = require('socket.io');
const { handleOnClientConnected } = require("./utils/handlers");

// app.get('/',(req,res)=>res.end("Hello from server!"))

io.on("connection", handleOnClientConnected );

// http.listen(process.env.PORT || PORT);