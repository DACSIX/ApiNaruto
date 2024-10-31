import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/Header/Header'
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import Favoritos from './pages/Favoritos/Favoritos'
import Detalles from "./pages/Detalles/Detalles"

const App = () => {

  return (


    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Favoritos' element={<Favoritos />} />
          <Route path='/Detalles/:id' element={<Detalles />} />
          
        </Routes>
      </div>
    </Router>
  )
}

export default App
