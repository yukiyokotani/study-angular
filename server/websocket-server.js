const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http,{
  cors: {
    origin: "http://localhost:4200",
    methods: ["GET", "POST"],
    allowedHeaders: [],
    credentials: true
  }
});
const PORT = process.env.PORT || 7000;

app.get('/', function(req, res){
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.send('hello world');
  // res.sendFile(__dirname + '/index.html');
})

io.on('connection', function(socket){
  socket.on('message', function(msg){
    console.log('received message: ' + msg);
  })
})

http.listen(PORT, function(){
  console.log('server listening on port: ' + PORT);
})