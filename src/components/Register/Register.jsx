import { useState } from 'react';

import './Register.css'

// eslint-disable-next-line react/prop-types
const Register = ({adicionarJogador}) => {
   
  const [nome, setNome] = useState("");

  const handleInputChange = (event) => {
    setNome(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nome.trim() !== "") {
      adicionarJogador(nome);
      setNome("");
    }
  };
  
  return (
      <form className="formContainer" onSubmit={handleSubmit}>
        <input
          type="text"
          value={nome}
          onChange={handleInputChange}
          placeholder="Digite o nome do jogador..."
        />
        <button type="submit">SALVAR</button>
      </form>
    );
  };
  
  export default Register;