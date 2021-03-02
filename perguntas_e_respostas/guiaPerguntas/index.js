const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/:nome/:language", (req, res) => {
  const nome = req.params.nome;
  const language = req.params.language;
  const exibirMsg = true;

  var produtos = [
    { nome: "Doritos", preco: 3.14 },
    { nome: "Coca-cola", preco: 5.0 },
    { nome: "Leite", preco: 3.0 },
  ];

  res.render("index", {
    nome,
    language,
    msg: exibirMsg,
    produtos,
  });
});

app.listen(8080, () => {
  console.log("App rodando...");
});
