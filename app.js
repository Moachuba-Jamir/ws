import { Server } from 'ws';

const myServer = new Server({port: 8080});

myServer.on('connection', (client)=>{
    console.log("Client has connected!!");
    console.log(client);
})