const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const clientes = [
  {
    id: 1,
    nome: 'Cliente 1',
    dataNascimento: '1990-01-01',
    cep: '12345-678',
    endereco: 'Rua Exemplo, 123',
    cidade: 'Cidade Exemplo',
    uf: 'UF',
  },
  {
    id: 2,
    nome: 'Cliente 2',
    dataNascimento: '1995-02-15',
    cep: '54321-876',
    endereco: 'Avenida Teste, 456',
    cidade: 'Outra Cidade',
    uf: 'XX',
  },
];

app.post('/clientes', (req, res) => {
  const novoCliente = req.body;
  novoCliente.id = clientes.length + 1;
  clientes.push(novoCliente);
  res.status(201).json(novoCliente);
});

app.get('/clientes/:id', (req, res) => {
  const clienteId = parseInt(req.params.id);
  const cliente = clientes.find((c) => c.id === clienteId);

  if (cliente) {
    res.json(cliente);
  } else {
    res.status(404).json({ error: 'Cliente não encontrado' });
  }
});

app.get('/clientes', (req, res) => {
  res.json(clientes);
});

app.put('/clientes/:id', (req, res) => {
  const clienteId = parseInt(req.params.id);
  const clienteIndex = clientes.findIndex((c) => c.id === clienteId);

  if (clienteIndex !== -1) {
    clientes[clienteIndex] = { ...clientes[clienteIndex], ...req.body };
    res.json(clientes[clienteIndex]);
  } else {
    res.status(404).json({ error: 'Cliente não encontrado' });
  }
});

app.delete('/clientes/:id', (req, res) => {
  const clienteId = parseInt(req.params.id);
  const clienteIndex = clientes.findIndex((c) => c.id === clienteId);

  if (clienteIndex !== -1) {
    const clienteRemovido = clientes.splice(clienteIndex, 1);
    res.json(clienteRemovido[0]);
  } else {
    res.status(404).json({ error: 'Cliente não encontrado' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
