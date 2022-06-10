import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

// OCULTAR EN .ENV
const firebaseConfig = {
    //envio por el privado 
}

const firebaseApp = initializeApp(firebaseConfig)
const db = getDatabase(firebaseApp)

export { firebaseApp, db }
