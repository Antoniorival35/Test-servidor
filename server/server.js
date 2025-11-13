import { createServer } from 'node:http';


const server = createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end('Servidor Node.js funcionando!');

});

server.listen(3000, ()=> console.log('Servidor rodando na porta 3000'));
export default App