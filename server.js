const express=require('express');
const app=express();
const http=require('http');
const server=http.createServer(app);
const {Server}=require("socket.io")
const io=new Server(server);

io.on('connection',()=>{

})
app.use(express.static('public'))

const PORT=8888;
console.log("hello")
server.listen(PORT,()=>{
    console.log("connected to port")
})