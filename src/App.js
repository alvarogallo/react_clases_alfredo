import logo from './logo.svg';
import './App.css';
import Login from './components/login/Login';
import Informacion from './paginas/informacion/Informacion';
import Especiales from './paginas/especiales/Especiales';
import UsarPC from './paginas/comprar/UsarPC';
import UsarNC from './paginas/comprar/UsarNC';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/login' element={<Login />} />
              <Route path='/informacion' element={<Informacion />} />
              <Route path='/especiales' element={<Especiales />} />
              <Route path='/usarPC' element={<UsarPC />} />
              <Route path='/usarNC' element={<UsarNC />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App;
