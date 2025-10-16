import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import About from './pages/About'
import Servise from './pages/Servise'

function App() {
  return (
    <Routes>
      <Route path='/*' element={<Home />} />
      {/* <Route path='/about' element={<About/>}/>
      <Route path='/service' element={<Servise/>}/> */}
      
    </Routes>
  )
}

export default App