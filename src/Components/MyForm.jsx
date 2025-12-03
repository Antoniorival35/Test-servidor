import { useState } from "react";
import "./MyForm.css";

// Componente do formulário
const MyForm = () => {
  // Estado para armazenar o nome digitado
  const [name, setName] = useState("");

  // Estado para armazenar a bio digitada
  const [bio, setBio] = useState("");

  return (
    <div>
      {/* Contêiner principal do formulário */}
      <form>
        <div>
          {/* Campo de entrada para o nome */}
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            value={name}             // Valor atual do estado "name"
            onChange={(e) => setName(e.target.value)} // Atualiza o estado
          />
        </div>

        <div>
          {/* Área de texto para bio/descrição */}
          <textarea
            name="bio"
            placeholder="Descrição do usuário"
            value={bio}              // Valor atual do estado "bio"
            onChange={(e) => setBio(e.target.value)} // Atualiza o estado
          ></textarea>
        </div>

        {/* Botão de envio do formulário */}
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
