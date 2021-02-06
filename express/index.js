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

// Passando um parâmetro
app.get('/ola/:nome/', function (req, res) {
  // req => dados enviados pelo usuário
  // res => resposta enviada ao usuário
  const nome = req.params.nome;
  res.send(`<h1>Olá ${nome}</h1>`);
});

// Passando dois parâmetros
app.get('/ola/:nome/:empresa', function (req, res) {
  // req => dados enviados pelo usuário
  // res => resposta enviada ao usuário
  const nome = req.params.nome;
  const empresa = req.params.empresa;
  res.send(`<h1>Olá ${nome} do ${empresa}</h1>`);
});

// Parâmetro opcional
app.get('/home/:usuarios?', function (req, res) {
  const usuarios = req.params.usuarios;

  if (!!usuarios) {
    res.send(`<h1>Página de Uusários</h1>`);
  }
  res.send(`<h1>Página Home</h1>`);
});

/***************** Query Params *********************/
app.get('/canal', function (req, res) {
  const canal = req.query['video'];
  res.send(canal);
});
/***************************************************/

app.listen(4000, function (erro) {
  if (erro) {
    console.log('Ocorreu um erro ao iniciar o servidor! ');
  }

  console.log('Servidor iniciado!');
});
