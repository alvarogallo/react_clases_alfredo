import Acumulador from '../Acumulador/Acumulador'
import { useNavigate } from 'react-router-dom'

function Navbar () {
  const navigate = useNavigate()

  return (
      <div className='row'>

        <Acumulador />
        <nav>
            <button className="btn btn-primary mx-2" onClick={() => navigate('/informacion')}>Ir a información</button>
            <button className="btn btn-primary mx-2" onClick={() => navigate('/especiales')}>Ir a números especiales</button>
            <button className="btn btn-primary mx-2" onClick={() => navigate('/usarPC')}>Usar Pesos</button>
            <button className="btn btn-primary mx-2" onClick={() => navigate('/usarNC')}>Usar NatiCoins</button>
        </nav>        
    </div>
  )
}

export default Navbar