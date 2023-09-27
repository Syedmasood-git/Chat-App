const express=require('express');
const app=express();
const http=require('http');
const server=http.createServer(app);
const {Server}=require("socket.io")
const io=new Server(server);
const PORT=8888;
io.on('connection',(socket)=>{
    console.log(socket.id);
    socket.on('secret message',(data)=>{
        io.emit('secret message',data);
    })
})
app.use(express.static('public'))


server.listen(PORT);