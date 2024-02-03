const http = require('http');
const express = require('express');
const aplicacao = express();


const servidorHttp = http.createServer(aplicacao);
const io = require ('socket.io')(servidorHttp);

io.addlistener ('connection', (socket) => {
console.log('um usuario conectou');
socket.addlistener('nova mensagem', (msg) => {
    io.emit ('nova mensagem', msg);
})
})

aplicacao.use(express.static('public'));


servidorHttp.listen (1000,'192.168.2.108');

