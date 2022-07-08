const socket = io('https://lit-fortress-44612.herokuapp.com/');

nick=document.getElementById('nick').value

socket.on('message',mesg=>{
    if(mesg[1]!=nick){
    div = document.createElement('div');
    div.className="hismessage"
    div.innerHTML=mesg[0];
    document.getElementById('allMessagesUwU').appendChild(div)
}
})

document.querySelector('button').onclick = ()=>{

    nick=document.getElementById('nick').value
    text = document.querySelector('input').value;
    const div = document.createElement('div');

    div.className="mymessage"
    div.innerHTML="["+nick+"]: "+text;
    document.getElementById('allMessagesUwU').appendChild(div)
    
    socket.emit('message',["["+nick+"]: "+text,nick])

    document.getElementById('mesage').value=''

}
/*const div = document.createElement('div');
    div.className="mymessage"
    div.innerHTML="["+nick+"]: "+text;
    document.getElementById('allMessagesUwU').appendChild(div)*/