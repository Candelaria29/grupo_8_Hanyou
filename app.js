const express = require('express');
const app = express();
const path = require('path')

const rutaPublic = path.resolve(__dirname, './public')

app.listen (8000, () => {
    console.log ('Servidor funcionando en http://localhost:8000')
})

app.use(express.static(rutaPublic))

app.get('/', (req,res) => res.sendFile(path.resolve(__dirname, './views/index.html')))
app.get('/login', (req,res) => res.sendFile(path.resolve(__dirname, './views/login.html')))
app.get('/productCart', (req,res) => res.sendFile(path.resolve(__dirname, './views/productCart.html')))
app.get('/productDetail', (req,res) => res.sendFile(path.resolve(__dirname, './views/productDetail.html')))
app.get('/register', (req,res) => res.sendFile(path.resolve(__dirname, './views/register.html')))