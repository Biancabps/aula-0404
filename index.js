const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => res.send('<h1>Página inicial</h1>'))

app.listen(port, () => console.info(`Servidor rodando na porta ${port}`))