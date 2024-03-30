import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import { UsuariosProvider } from './context/UsuariosContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <UsuariosProvider>
    <App />
    </UsuariosProvider>

    </Router>

  </React.StrictMode>,
)
