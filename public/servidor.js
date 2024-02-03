const http = require('http'); // facilita a configuração de um servidor htttp por meio de requisição uma variavel 
const express = require('express');
const aplicacao = express();

const servidorHttp = http.createServer(aplicacao);
const io = require('soquet.io')(servidorHttp)

botao.addEventListener('click')
io.addListener('connection', () =>  {
    console.log('um usuario conectou');
})



servidorHttp.listen(1000);
//aplicação backend de js, rodada pelo node
aplicacao.use(express.static('public'))