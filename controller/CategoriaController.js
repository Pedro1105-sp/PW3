const express = require("express");

/* CONFIGURAÇÃO DAS ROTAS DE CATEGORIA */

const router = express.Router();

const modelCategoria = require("../model/CategoriaModel");

/* ROTAS DE CRUD DE CATEGORIAS: */
router.get("/testeget", (req, res)=>{
    //console.log("TESTE DE ROTA GET CATEGORIAS");
    console.log("A REQUISIÇÃO GET PASSOU PELA CONTROLLER");
    res.send("CATEGORIAS GET🚗");
});

router.post("/testepost", (req, res)=>{
    // console.log("A REQUISIÇÃO POST PASSOU PELA CONTROLLER");
    // res.send("CATEGORIAS POST🚗");
    //RECEBER DADOS
    let {nome_categoria} = req.body;
    console.log(nome_categoria);
    res.send("OK CATEGORIA🚗");

    //GRAVAR DADOS
    modelCategoria.create(
        {nome_categoria}
    ).then(
        ()=>{
            return res.status(201).json({
                erroStatus: false,
                menssagemStatus: "Categoria inserida com sucesso!"
            });
        }
    ).catch(
        (erro)=>{
            return res.status(400).json({
                erroStatus: true,
                erroMenssagem: "Houve um erro ao cadastrar categoria!",
                erroBancoDados: erro
            });
        }
    )

    
});

router.put("/testeput", (req, res)=>{
    console.log("A REQUISIÇÃO PUT PASSOU PELA CONTROLLER");
    res.send("CATEGORIAS PUT🚗");
});

router.delete("/testedelete", (req, res)=>{
    console.log("A REQUISIÇÃO DELETE PASSOU PELA CONTROLLER");
    res.send("CATEGORIAS DELETE🚗");
});


module.exports = router;