const express = require("express");

/* CONFIGURAÇÃO DAS ROTAS DE CATEGORIA */

const router = express.Router();

/* ROTAS DE CRUD DE CATEGORIAS: */
router.get("/testeget", (req, res)=>{
    //console.log("TESTE DE ROTA GET CATEGORIAS");
    console.log("A REQUISIÇÃO GET PASSOU PELA CONTROLLER");
    res.send("CATEGORIAS GET🚗");
});

router.post("/testepost", (req, res)=>{
    console.log("A REQUISIÇÃO POST PASSOU PELA CONTROLLER");
    res.send("CATEGORIAS POST🚗");
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