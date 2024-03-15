import { useState } from 'react';

import './Register.css'
import useUsuarios from '../hooks/useUsuarios';

// eslint-disable-next-line react/prop-types
const Register = () => {
  const {adicionarUsuario } = useUsuarios()
  const [nome, setNome] = useState("");

  const handleInputChange = (event) => {
    setNome(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nome.trim() !== "") {
      adicionarUsuario(nome);
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