const express = require('express'); // Importa o express
const app = express(); // Inicia o express

app.listen(4000, function (erro) {
   if (erro) {
       console.log('Ocorreu um erro ao iniciar o servidor! ')
   }

   console.log('Servidor iniciado!')
})