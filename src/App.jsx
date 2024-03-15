
import './App.css'
import Header from './components/Header/Header'
import TabBar from './components/TabBar/TabBar'
import {Routes, Route } from 'react-router-dom';
import Ranking from './pages/Ranking'
import Home from './pages/Home'
import Game from './pages/Game'
import { UsuariosProvider } from './context/UsuariosContext';
import { AlertProvider } from './context/AlertContext';

function App() {


  return (
          <AlertProvider>
        <UsuariosProvider>
    <Header/>
      <TabBar/>
      <Routes>
        <Route path='/' element ={<Home />} />
        <Route path='/Ranking' element ={<Ranking />}/>
        <Route path='/game' element ={<Game />} />
      </Routes>
        </UsuariosProvider>
        </AlertProvider>
  )
}

export default App
