const http = require('http').createServer();


const io = require('socket.io')(http,{
    cors:{orygin:"*"}
})

io.on('connection',(socket)=>{
    console.log('connected')
    socket.on('message',(message)=>{
        console.log(message)
        io.emit('message',message)
    })
})

http.listen(process.env.PORT || 8080,()=>console.log("slucham"))
