/* eslint-disable */ 
/* для игнорирования, так как в ubuntu не сработала настройка eslintIgnore из package.json*/
const express = require('express');
const path = require('path');

const app = express();
const { PORT = 3000 } = process.env;

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/auth/signin', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')));

app.get('/auth/signup', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')));

app.get('/user', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')));

app.get('/user/profile', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')));

app.get('/user/password', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')));

app.get('/profile/edit', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')));

app.get('/messenger', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')));

app.get('/404', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')));

app.get('/500', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')));

app.listen(PORT);