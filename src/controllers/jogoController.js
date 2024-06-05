var jogoModel = require("../models/jogoModel");
// var aquarioModel = require("../models/aquarioModel");

function obterDados(req, res) {
    var id = req.body.idServer;

    if (id == undefined) {
        res.status(400).send("Seu usuário está undefined!");
    } else {

        jogoModel.obterDados(id)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 0) {
                        res.status(204).json({msg: "Você ainda não realizou uma tentativa no quiz!"});
                    } else{
                        res.status(200).json(
                            {
                                ok: true,
                                data: resultadoAutenticar
                            });
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

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
module.exports = {cadastrarPontuacao, obterDados};