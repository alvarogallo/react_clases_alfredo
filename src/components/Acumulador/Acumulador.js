import { useEffect, useState } from 'react'
import { getAccumulator } from '../../firebase/database'

function Acumulador () {
  const [accumulador, setAccumulador] = useState(null)

  useEffect(() => {
    getAccumulator()
  }, [])

  return (
    <div>
      Número: 400,000
    </div>
  )
}

export default Acumulador