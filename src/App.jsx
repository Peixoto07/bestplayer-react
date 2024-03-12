
import './App.css'
import Header from './components/Header/Header'
import TabBar from './components/TabBar/TabBar'
import {Routes, Route } from 'react-router-dom';
import Ranking from './pages/Ranking'
import Home from './pages/Home'
import Game from './pages/Game'

function App() {


  return (
    <>
      <Header/>
      <TabBar/>
      <Routes>
        <Route path='/' element ={<Home />} />
        <Route path='/Ranking' element ={<Ranking />}/>
        <Route path='/game' element ={<Game />} />
      </Routes>
    </>
  )
}

export default App
