const express = require('express'); // Importa o express
const app = express(); // Inicia o express

app.get('/', function (request, response) {
  response.send('Bem vindo!');
  //response.send('De novo'); não é permitido ter duas respostas
});

app.get('/blog', function (req, res) {
  res.send('<h1>Bem vindo ao blog!</h1>');
});

app.get('/canal/youtube', function (req, res) {
  res.send('<h1>Bem vindo ao meu canal!</h1>');
});

app.listen(4000, function (erro) {
  if (erro) {
    console.log('Ocorreu um erro ao iniciar o servidor! ');
  }

  console.log('Servidor iniciado!');
});
