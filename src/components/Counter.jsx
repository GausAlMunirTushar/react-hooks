import React from 'react'

const Counter = () => {
    const [count, setCount] = React.useState(0)
    const increment = () => {
        setCount(count + 1)
        console.log(count)
    }
    const decrement = () => {   
        setCount(count - 1)
        console.log(count)
    }
  return (
    <div style={{display: 'flex'}}>
        <button onClick={increment}>+</button>
        <p>{count}</p>
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter