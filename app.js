const ws = require('ws');

const myServer = new ws.Server({port: 8080});

myServer.on('connection', (client)=>{
    console.log("Client has connected!!");
    console.log(client);

    client.send("hello we have successfuly connected! Im running on the cloud using render!");
})