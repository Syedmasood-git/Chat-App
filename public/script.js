let username="";
const btn=document.getElementById("join-btn");
const usernameInput=document.getElementById("username-input");
const usernameForm=document.querySelector(".form-username");
const chatroomContainer=document.querySelector(".chatroom-container");
const messageInput=document.getElementById("message-input");
const sendButton=document.getElementById("send-button");
const messagesContainer = document.querySelector(".messages");
var socket = io();

btn.addEventListener("click",(event)=>{
    event.preventDefault();
    username=usernameInput.value;
    if(username){
        usernameForm.style.display="none";
        chatroomContainer.style.display="block";
    }
})

sendButton.addEventListener('click',(event)=>{
    event.preventDefault();
    let data={
        id: socket.id,
        username: username,
        message: messageInput.value
    }
    socket.emit("secret message",data);
    appendMessage(data, "sent");
})
socket.on("secret message", (data) => {
    if (data.id !== socket.id) {
      appendMessage(data, "recieved");
    }
  });
function appendMessage(data,type){
    var msgdiv=document.createElement("div");
    msgdiv.innerText=`${data.username}:${data.message}`;
    if(type==="sent"){
        msgdiv.setAttribute("class","message sent");
    }
    else{
        msgdiv.setAttribute("class","message");
    }
    messagesContainer.appendChild(msgdiv);
    messageInput.value="";
}
