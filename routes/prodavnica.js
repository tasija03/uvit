const express = require('express');
const router = express.Router();

const artikli = [

    {naziv: 'mleko', id: '01', cena: 100, brArtikala: 8},
    {naziv: 'hleb', id: '02', cena: 54, brArtikala: 25},
    {naziv: 'pasteta', id: '03', cena: 60, brArtikala: 15},
    {naziv: 'sladoled', id: '04', cena: 75, brArtikala: 10},
];

router.get('/', function(req, res, next){

    res.render('prodavnica.ejs', {
        artikli: artikli
    });
});

module.exports = router;