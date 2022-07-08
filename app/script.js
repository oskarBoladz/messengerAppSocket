const socket = io('https://lit-fortress-44612.herokuapp.com/');//https://lit-fortress-44612.herokuapp.com/
nick=null
while (nick==null ){
nick=prompt("nick:")//document.getElementById('nick').value
}
while(!(nick.length<=15)){
    nick=prompt("nick:")
}

socket.emit('users',nick)

socket.on('users',data =>{
    console.log(data)
})

socket.on('message',mesg=>{
    if(mesg["nick"]!=nick){
    div = document.createElement('div');
    div.className="hismessage"
    div.innerHTML=mesg["message"];
    document.getElementById('allMessagesUwU').appendChild(div)
}
})

document.querySelector('button').onclick = ()=>{

    /*nick=document.getElementById('nick').value*/
    text = document.querySelector('input').value;
    // + ":" + today.getSeconds()
    /*today = new Date();
    timet = today.getHours() + ":" + today.getMinutes();*/

    

    if(text!=""){

        const div = document.createElement('div');

        div.className="mymessage"
        div.innerHTML="["+nick+"]: "+text;
        document.getElementById('allMessagesUwU').appendChild(div)
        
        socket.emit('message',{message:"["+nick+"] "+text , nick:nick})

        document.getElementById('mesage').value=''
        
    }
}
//    console.log(Date.getTime())
/*const div = document.createElement('div');
    div.className="mymessage"
    div.innerHTML="["+nick+"]: "+text;
    document.getElementById('allMessagesUwU').appendChild(div)*/