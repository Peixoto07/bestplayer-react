/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alertStatus, setAlertStatus] = useState(false);
  const [mensagemAlerta, setMensagemAlerta] = useState('');
  const [cor, setCor] = useState('');

  const mostrarAlerta = (duracao, mensagem, novaCor) => {
    setAlertStatus(true);
    setMensagemAlerta(mensagem);
    setCor(novaCor)
    setTimeout(() => {
      setAlertStatus(false);
      setMensagemAlerta('');
      setCor('')
    }, duracao);
  };

  return (
    <AlertContext.Provider value={{ alertStatus, mensagemAlerta, mostrarAlerta, cor}}>
      {children}
    </AlertContext.Provider>
  );
};

