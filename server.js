//1. create a server
let port = process.env.PORT || 8000
let express = require('express');
let app = express ();
let server =  require ('http').createServer(app).listen(port, function (){
    console.log ('Server is healthy: ', port);
});

//2. tell server where to look for files
app.use(express.static('public'));

//3. create socket connection
let io = require ('socket.io').listen(server);

//4. ***OUTPUT***
//clients in the output namespace @@@A: what's io."of"? <<==
var outputs = io.of('/output')
//listen for output clients to connect
outputs.on('connection', function(socket){
    console.log('output is connected: ' + socket.id)
//listen for output clients to disconnect
    socket.on('disconnect', function() {
        console.log("output is disconnected " + socket.id) //@@@A : check code, no : after disconnected <<==
    });
});

//5. ***INPUT***
////clients in the input namespace
var inputs = io.of('/input');

//listen for input clients to connect
inputs.on('connection', function(socket){
    console.log('input is connected: ' + socket.id)

//listen for input clients to disconnect
    socket.on('data', function(data) { // @@@A: why do we use data here?
        //@@@A : check code, no : after disconnected <<==
    });
});

//6. listen for data messages from this client
socket.on ('data', function(data) {



//7. send it all of the output clients
    outputs.emit('message', message);
})

//8. listen for this input client to disconnect
    socket.on('disconnect', function() {
        console.log("input is disconnected " + socket.id) //@@@A : check code, no : after disconnected <<==
        outputs.emit('disconnected', socket.id);
    });
});

//9. tell all of the output clients this client disconnected


