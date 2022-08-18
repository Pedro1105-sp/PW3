const express = require("express");
const Categoria = require("../model/CategoriaModel");

/* CONFIGURAÇÃO DAS ROTAS DE CATEGORIA */

const router = express.Router();

const modelCategoria = require("../model/CategoriaModel");

/* ROTAS DE CRUD DE CATEGORIAS: */
router.get("/listarCategoria", (req, res)=>{
    //console.log("TESTE DE ROTA GET CATEGORIAS");
    //console.log("A REQUISIÇÃO GET PASSOU PELA CONTROLLER");
    //res.send("CATEGORIAS GET🚗");

    //LISTANDO DADOS SEM CRITÉRIOS
    modelCategoria.findAll()
        .then(
            (Categorias)=>{
                return res.status(200).json(Categorias);
            }
        ).catch(
            (erro)=>{
                return res.status(400).json({
                    erroStatus: true,
                    erroMessagem: "Houve um erro ao selecionar os dados de categoria",
                    erroBancoDados: erro
                })
            }
        )
});

    //LISTANDO DADOS COM CRITÉRIOS
    router.get("/listarCategoria/:id", (req, res)=>{

        let {id} = req.params;

        modelCategoria.findByPk(id)
            .then(
                (categoria)=>{
                    res.status(200).json(categoria);
                }
            ).catch(
                (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: "Houve um erro ao selecionar os dados de categoria",
                        erroBancoDados: erro
                    });
                }
            );

    });


router.post("/cadastrarCategoria", (req, res)=>{
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
            return res.status(200).json({
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

router.put("/alterarCategoria", (req, res)=>{
    // console.log("A REQUISIÇÃO PUT PASSOU PELA CONTROLLER");
    // res.send("CATEGORIAS PUT🚗");

    //RECEBENDO DADOS
    let {id, nome_categoria} = req.body;

    //ALTERANDO DADOS
    modelCategoria.update(
        {nome_categoria},
        {where:{id}}
    ).then(
        ()=>{
            return res.status(200).json({
                erroStatus: false,
                menssagemStatus: "Categoria alterada com sucesso!"
            });
        }
    ).catch(
        (erro)=>{
            return res.status(400).json({
                erroStatus: true,
                erroMenssagem: "Houve um erro ao alterar categoria!",
                erroBancoDados: erro
            });
        }
    );

});

router.delete("/excluirCategoria/:id", (req, res)=>{
    // console.log("A REQUISIÇÃO DELETE PASSOU PELA CONTROLLER");
    // res.send("CATEGORIAS DELETE🚗");

    let {id} = req.params;

    modelCategoria.destroy(
        {where:{id}}

    ).then(
        ()=>{
            return res.status(201).json({
                erroStatus: false,
                menssagemStatus: "Categoria excluida com sucesso!"
            });
        }
    ).catch(
        (erro)=>{
            return res.status(400).json({
                erroStatus: true,
                erroMenssagem: "Houve um erro ao excluir categoria!",
                erroBancoDados: erro
            });
        }
    );

});


module.exports = router;