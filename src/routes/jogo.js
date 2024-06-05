var express = require("express");
var router = express.Router();

var jogoController = require("../controllers/jogoController");

//Recebendo os dados do html e direcionando para a função cadastrar de quizController.js
router.post("/cadastrarPontuacao", function (req, res) {
    jogoController.cadastrarPontuacao(req, res);
});

module.exports = router;