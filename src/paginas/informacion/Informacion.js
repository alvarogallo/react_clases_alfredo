import Navbar from '../../components/Navbar/Navbar'

function Informacion(){
    const data = JSON.parse(window.localStorage.getItem('data'))

    return (
    
        <div>
            <h1>Estamos en Informacion {data.nom_ape}</h1>
            <Navbar />
        </div>            
    )
}

export default Informacion;