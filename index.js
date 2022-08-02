const express = require('express');

const app = express();

app.get('/HOMEPAGE', (req, res)=>{
    console.log('LOJA DE CARROS');
    res.send('EM ANDAMENTO🚗');

})

app.get('/LOJA', (req, res)=>{

    console.log('LOJA DE CARROS');
    res.send('EM ANDAMENTO🚓');


})

app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO EM: http://localhost:3000');
});