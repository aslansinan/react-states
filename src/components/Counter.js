import React, { useState } from 'react'

function Counter() {
    const [count,SetCount] = useState(0);
    const arttir = () => {
        SetCount(count+1)
    }
    const azalt = () => {
        SetCount(count-1)
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={azalt}>Azalt</button>
        <button onClick={arttir}>Arttir</button>
    </div>
  )
}

export default Counter