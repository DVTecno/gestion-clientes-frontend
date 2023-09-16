import './App.css'
import { Main } from './componentes/Main';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from './componentes/NavBar';
import { Footer } from './componentes/Footer';
import { AgregarCliente } from './componentes/AgregarCliente';

function App() {

  return (
    <div className="container-fluid">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route  path="/agregar-cliente" element={<AgregarCliente />} />
        <Route  path="/editar-cliente/:id" element={<AgregarCliente />} />
      </Routes>
      <Footer />

    </div>

  )
}

export default App
