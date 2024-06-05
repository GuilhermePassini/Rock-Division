var jogoModel = require("../models/jogoModel");
// var aquarioModel = require("../models/aquarioModel");

function cadastrarPontuacao(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var id = req.body.idServer
    var pontuacao = req.body.pontuacaoServer


    // Faça as validações dos valores
    if (id == undefined) {
        res.status(400).send("Seu id está undefined!");}
    else if (pontuacao == undefined) {
        res.status(400).send("Sua pontuação está undefined!");

    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        jogoModel.cadastrarPontuacao(id, pontuacao)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
module.exports = {cadastrarPontuacao};