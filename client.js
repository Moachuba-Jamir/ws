const serverUrl = 'https://websocketforbasketballgame.onrender.com';

const connectToServer = new WebSocket(serverUrl);

connectToServer.addEventListener('open', (event)=>{
    console.log('yo you connected to the server');
    console.log(event);
});

connectToServer.addEventListener('message', ({data})=>{
    console.log("from server: " + data);
})