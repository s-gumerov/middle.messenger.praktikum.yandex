const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

app.use(express.static(path.join(__dirname, '../dist')));

/*
const routes = [
    '/',
    '/sign-in',
    '/sign-up',
    '/chat',
    '/profile',
    '/profile/edit',
    '/profile/change-password',
    '/404',
    '/500'
]
*/

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')));

app.get('/sign-in', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')));

app.get('/sign-up', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')));

app.get('/chat', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')));

app.get('/profile', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')));

app.get('/profile/edit', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')));

app.get('/profile/change-password', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')));

app.get('/404', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')));

app.get('/500', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')));

app.listen(PORT);