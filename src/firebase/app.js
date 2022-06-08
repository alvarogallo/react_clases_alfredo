import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

// OCULTAR EN .ENV
const firebaseConfig = {
    apiKey: "AIzaSyAM3Bl88JGqcspmHg1TFE01Nfuwgda6mgc",
    authDomain: "alfredo-clase.firebaseapp.com",
    projectId: "alfredo-clase",
    storageBucket: "alfredo-clase.appspot.com",
    messagingSenderId: "846810905272",
    appId: "1:846810905272:web:01efe4f401c6fac71fd24d"  
}

const firebaseApp = initializeApp(firebaseConfig)
const db = getDatabase(firebaseApp)

export { firebaseApp, db }
