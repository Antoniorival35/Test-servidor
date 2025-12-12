    //arquivo App.jsx

import { useEffect, useState } from 'react';
import Events from './Components/Events';
import MyForm from './Components/MyForm';


function App() {
  const [status, setStatus] = useState('Verificando conexão...');

  useEffect(() => {
    const testarConexao = async () => {
      try {
        const resposta = await fetch('http://localhost:3000/usuarios');
        if (!resposta.ok) {
          throw new Error(`Erro: ${resposta.status}`);
        }
        const dados = await resposta.json();
        setStatus('Conexão OK!');
      } catch (erro) {
        setStatus('Falha na conexão: ${erro.message}');
      }
    };

    testarConexao();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Teste de Conexão com Back-End</h1>
      <p>{status}</p>
      <MyForm/>
      <Events />
    </div>
  );
}

export default App