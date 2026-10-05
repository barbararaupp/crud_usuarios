import express from 'express';

const servidor = express();

servidor.use(express.json());

const filmes = [];
const jogos = [];

// Health Check
servidor.get('/', (req, res) => {
    res.send('Olá!');
});

// GET - listar filmes
servidor.get('/filmes', (req, res) => {
    res.json(filmes);
});

// POST - cadastrar filme
servidor.post('/filmes', (req, res) => {
    const filme = req.body;

    filmes.push(filme);

    res.status(201).json(filme);
});

// GET - listar jogos
servidor.get('/jogos', (req, res) => {
    res.json(jogos);
});

// POST - cadastrar jogo
servidor.post('/jogos', (req, res) => {
    const jogo = req.body;

    jogos.push(jogo);

    res.status(201).json(jogo);
});

// Iniciar servidor
servidor.listen(3000, () => {
    console.log('Servidor rodando!');
});
