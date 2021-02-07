const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/:nome/:language', (req, res) => {
  const nome = req.params.nome;
  const language = req.params.language;
  res.render('index', {
    nome,
    language,
  });
});

app.listen(8080, () => {
  console.log('App rodando...');
});
