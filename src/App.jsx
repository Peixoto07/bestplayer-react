
import './App.css'
import Header from './components/Header/Header'
import TabBar from './components/TabBar/TabBar'
import {Routes, Route, Navigate } from 'react-router-dom';
import Ranking from './pages/Ranking'
import Home from './pages/Home'
import Game from './pages/Game'
import { AlertProvider } from './context/AlertContext';
import useUsuarios from './components/hooks/useUsuarios';


function App() {
 const {usuarios} = useUsuarios()

  return (
          <AlertProvider>
    <Header/>
      <TabBar/>
      <Routes>
        <Route path='/' element ={<Home />} />
        <Route path='*' element={<Navigate to="/" />} />
        {usuarios.length >= 3 ? (
            <>
              <Route path='/Ranking' element={<Ranking />} />
              <Route path='/Game' element={<Game />} />
            </>
          ) : null}
        
      </Routes>
        </AlertProvider>
  )
}

export default App
