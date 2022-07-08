

const socket = io('https://lit-fortress-44612.herokuapp.com/');//https://lit-fortress-44612.herokuapp.com/
nick=null
while (nick==null ){
nick=prompt("nick:")//document.getElementById('nick').value
}
while(!(nick.length<=20)){
    nick=prompt("nick:")
}

socket.emit('users',{nick:nick,std:""})

usersall=[]
usersall.push(nick)
//console.log(usersall.includes(nick))
dusr = document.createElement('div');
dusr.className="oneUser"
dusr.id=nick
dusr.innerHTML=nick
document.getElementById('allUs').appendChild(dusr)

socket.on('users',data =>{

        console.log(data["nick"])
        if(data["nick"]!=nick && usersall.includes(data["nick"])==false && data["std"]!="del"){
        dusr = document.createElement('div');
        dusr.className="oneUser"
        dusr.id=data["nick"]
        dusr.innerHTML=data["nick"]
        document.getElementById('allUs').appendChild(dusr)


            usersall.push(data["nick"])
            socket.emit('users',{nick:nick,std:""});
            console.log(usersall)
        }
        else if(usersall.includes(data["nick"]) && data["std"]=="del"){
            a=data["nick"]
            console.log(a)
            document.getElementById(a).remove();
        }

})

addEventListener('beforeunload', () => { 
    socket.emit('users',{nick:nick,std:"del"})
});
/*document.getElementById("my-element").remove();*/ 
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