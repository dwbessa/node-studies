'use strict'

import { createServer } from "node:http";

const data = JSON.stringify([
  {id: '1', name: 'Café', rrp: '10', info: 'Café pilão do bom.'},
  {id: '2', name: "Açaí", rrp: '13', info: 'Açaí delicioso.'},
  {id: '3', name: "Caderno", rrp: '5', info: 'Caderno espiral capa dura universitário 1 matéria'}
])

const server = await createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(data);
})

server.listen(3000);
console.log("Server listening on port 3000")