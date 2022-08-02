const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


app.get('/',(rq,res)=>{
  res.sendFile(__dirname + '/page.html');

});



io.on('connection', (socket) => {

 





io.emit('count', socket.client.conn.server.clientsCount);







socket.on('join', (msg) => {
      io.emit('addjoin', msg);
});



socket.on('user', (msg) => {
    console.log('message: ' + msg.msg);
      io.emit('chat', msg);
  });




  socket.on('disconnect', () => {
    console.log('user disconnected');
  
  });


});




server.listen(process.env.PORT, () => {
  console.log('listening on *:3000');
});
