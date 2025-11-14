//Arquivo server.js
server.js
import { createServer } from 'node:http';


app.get('/api/status', (req, res) => {
  res.json({ mensagem: 'Servidor está rodando!' });
});

server.listen(3000, ()=> console.log('Servidor rodando na porta 3000'));
