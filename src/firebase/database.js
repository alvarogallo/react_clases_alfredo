import { getDatabase, get, child, ref } from 'firebase/database'
import { db } from './app'

const dbRef = ref(db)

const getAccumulator = get(child(dbRef, 'RP/N0000')).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val())
  } else {
    console.log("No existe la data")
  }
}).catch(err => console.log(err))

export {
  getAccumulator
}