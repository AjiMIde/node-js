const WebSocket = require('ws')
const WebSocketServer = WebSocket.Server

const wss = new WebSocketServer({
  port: 3300
})

wss.on('connection', ws => {
  console.log(`[SERVER] connection()`);
  ws.on('message', msg => {
    console.log(`[SERVER] Received: ${msg}`);
    ws.send(`ECHO: ${msg}`, (err) => {
      if (err) {
        console.log(`[SERVER] error: ${err}`);
      }
    });
  })
});