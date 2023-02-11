import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, BrowserRouter, Route} from 'react-router-dom'
import './index.css'
import Navbar from './components/NavBar'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Contato from './pages/Contato'
import Projetos from './pages/Projetos'
import NotFound from './pages/NotFound'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      < Navbar />
      < Sidebar />
      <Routes>
       <Route path='/react-page/' element={<Home />} />
       <Route path='/react-page/contato' element={<Contato />} />
       <Route path='/react-page/projetos' element={<Projetos />} />
       <Route path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
